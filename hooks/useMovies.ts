import { Movie } from "@/generated/prisma/client";
import axios from "axios";
import { useEffect, useState } from "react";

export function useMovies(endpoint:string){
    const [loading, setLoading] = useState(true)
    const [movies, setMovies] = useState<Movie[]>([])
    const [error, setError] = useState<Error | null>(null)

    useEffect(()=>{
        const fetchMovies = async () => {
            try{
                const res = await axios.get(endpoint)
                setMovies(res.data)
            }catch(e){
                if(e instanceof Error){
                    setError(e)
                }else{
                    setError(new Error("Error desconocido"))
                }
            }finally{
                setLoading(false)
            }
        }
        fetchMovies()
    },[])

    return {loading, movies, error}
}