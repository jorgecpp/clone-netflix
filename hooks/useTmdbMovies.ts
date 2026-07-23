import LoadingMovies from "@/app/(routes)/loadingMovies/page";
import { getPopularMovies, getRankedDayMovies, searchMovies } from "@/services/tmdb.service";
import { Movie } from "@/types/movie.type";
import { useState, useEffect } from "react";

export function useTmdbMovies(){
    const [movies, setMovies] = useState<Movie[]>([])
    const [rankedMovies, setRankedMovies] = useState<Movie[]>([])
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

    async function loadRankedDayMovies() {
        try{
            setLoading(true)

            const data = await getRankedDayMovies()

            setRankedMovies( data )
        }finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        loadRankedDayMovies()
        loadPopularMovies()
    },[])

    useEffect(()=>{
        const timer = setTimeout(async()=>{
            if(search.trim() === "") {
                LoadingMovies()
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
        loading,
        rankedMovies
    }
}
