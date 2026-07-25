import { getSeries } from "@/services/tmdb.service";
import { searchSeries } from "@/services/tmdb.service";
import { Serie } from "@/types/movie.type";
import { useEffect, useState } from "react";
import { usePagination } from "./usePage";

export function useTmdbSeries(){
    const [ loading, setLoading] = useState(false)
    const [ series, setSeries] = useState<Serie[]>([])
    const [ error, setError] = useState<Error | null>(null)
    const [ search, setSearch] = useState("")
    const { page, setPage, nextPage, previousPage, totalPages, setTotalPages } = usePagination()

    async function loadSeries() {
        try{
            setLoading(true)

            const data = await getSeries(page)

            setSeries(data.results)
            setTotalPages(data.total_pages)
        }catch(err){
            setError(err as Error)
        }finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        const timer = setTimeout(async () => {
            try {
                setLoading(true)

                if (search.trim() === "") {
                    const data = await getSeries(page)

                    setSeries(data.results)
                    setTotalPages(data.total_pages)
                } else {
                    const data = await searchSeries(search, page)

                    setSeries(data.results)
                    setTotalPages(data.total_pages)
                }
            } catch (err) {
                setError(err as Error)
            } finally {
                setLoading(false)
            }
        }, 500)

        return () => clearTimeout(timer)
    }, [search, page])


    return {loading, series, error, search, setSearch , page, setPage, nextPage, previousPage, totalPages}
}
