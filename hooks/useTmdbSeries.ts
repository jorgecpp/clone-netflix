import { getSeries } from "@/services/tmdb.service";
import { searchSeries } from "@/services/tmdb.service";
import { Serie } from "@/types/movie.type";
import { useEffect, useState } from "react";

export function useTmdbSeries(){
    const [ loading, setLoading] = useState(false)
    const [ series, setSeries] = useState<Serie[]>([])
    const [ error, setError] = useState<Error | null>(null)
    const [ search, setSearch] = useState("")

    async function loadSeries() {
        try{
            setLoading(true)

            const data = await getSeries()

            setSeries(data)
        }catch(err){
            setError(err as Error)
        }finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        loadSeries()
    },[])

    useEffect(()=>{

        const time = setTimeout(async () => {
            try{
                setLoading(true)

                if(search.trim() === ""){
                    loadSeries()
                    return
                }

                
                const data = await searchSeries(search)
                setSeries(data)
            }catch(err){
                setError( err as Error)
            }finally{
                setLoading(false)
            }
            
        },500)

        return ()=>{clearTimeout(time)}
    },[search])


    return {loading, series, error, search, setSearch}
}
