import { getPopularMovies, searchMovies } from "@/services/tmdb.service";
import { Movie } from "@/types/movie.type";
import { useState, useEffect } from "react";

export function useTmdbMovies(){
    const [movies, setMovies] = useState<Movie[]>([])
    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(false)

    async function loadPopularMovies() {
        try{
            setLoading(true)

            const data = await getPopularMovies()

            setMovies ( data )
        }finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        const timer = setTimeout(async()=>{
            if(search.trim()===""){
                loadPopularMovies()
                return
            }

            try{
                setLoading(true)
                const data = await searchMovies(search)
                setMovies(data)
            }finally{
                setLoading(false)
            }
        },500)
        return () => clearTimeout(timer)
    },[search])

    return {
        movies,
        search,
        setSearch,
        loading
    }
}
