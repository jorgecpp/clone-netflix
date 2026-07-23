import { useState, useEffect } from "react"
import { MovieVideo } from "@/types/movie.type"
import { getMovieTrailer } from "@/services/tmdb.service"



export function useMovieTrailer( id: number ){
    const [trailer, setTrailer] = useState<MovieVideo | null>(null)
    
    useEffect(()=>{
        async function loadTrailer() {
            const data = await getMovieTrailer(id)
            setTrailer(data)
        }
        loadTrailer()
    },[id])

    return {trailer}
}