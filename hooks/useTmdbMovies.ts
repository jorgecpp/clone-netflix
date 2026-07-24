import LoadingMovies from "@/app/(routes)/loadingMovies/page";
import { getPopularMovies, getRankedDayMovies, searchMovies } from "@/services/tmdb.service";
import { Movie } from "@/types/movie.type";
import { useState, useEffect } from "react";

export function useTmdbMovies(){
    const [movies, setMovies] = useState<Movie[]>([])
    const [rankedMovies, setRankedMovies] = useState<Movie[]>([])
    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPage] = useState(1)

    async function loadPopularMovies() {
        try{
            setLoading(true)

            const data = await getPopularMovies(page)

            setMovies ( data.results )
            setTotalPage( data.total_pages)
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
    },[])

    useEffect(()=>{
        loadPopularMovies()
    },[page])

    useEffect(()=>{
        const timer = setTimeout(async()=>{
            try{
                setLoading(true)

                if(search.trim() === "") {
                    const data = await getPopularMovies(page)
                    setMovies(data.results)
                    setTotalPage(data.total_pages)
                    
                }else{
                    const data = await searchMovies(search, page)
                    setMovies(data.results)
                    setTotalPage(data.total_pages)
                }
            }finally{
                setLoading(false)
            }
        },500)
        return () => clearTimeout(timer)
    },[search, page])

    return {
        movies,
        search,
        setSearch,
        loading,
        rankedMovies,
        page,
        totalPages,
        setPage
    }
}
