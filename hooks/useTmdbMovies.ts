import LoadingMovies from "@/app/(routes)/loadingMovies/page";
import { getPopularMovies, getRankedDayMovies, searchMovies } from "@/services/tmdb.service";
import { Movie } from "@/types/movie.type";
import { useState, useEffect } from "react";
import { usePagination } from "./usePage";

export function useTmdbMovies(){
    const [movies, setMovies] = useState<Movie[]>([])
    const [rankedMovies, setRankedMovies] = useState<Movie[]>([])
    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(false)
    const {page, setTotalPages, nextPage, previousPage, setPage, totalPages} = usePagination()

    async function loadPopularMovies() {
        try{
            setLoading(true)

            const data = await getPopularMovies(page)

            setMovies ( data.results )
            setTotalPages( data.total_pages)
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

    useEffect(() => {
            const timer = setTimeout(async () => {
                try {
                    setLoading(true)
    
                    if (search.trim() === "") {
                        const data = await getPopularMovies(page)
    
                        setMovies(data.results)
                        setTotalPages(data.total_pages)
                    } else {
                        const data = await searchMovies(search, page)
    
                        setMovies(data.results)
                        setTotalPages(data.total_pages)
                    }
                }finally {
                    setLoading(false)
                }
            }, 500)
    
            return () => clearTimeout(timer)
        }, [search, page])

    return {
        movies,
        search,
        setSearch,
        loading,
        rankedMovies,
        page,
        nextPage,
        previousPage,
        setPage,
        totalPages
    }
}
