"use client"

import { MovieCard } from "@/components/shared/cardMovies/MovieCard";
import { PopularMovie } from "@/generated/prisma/client";
import { useEffect, useState } from "react";
import axios from "axios";

export function Ranking(){
    const [movies, setMovies] = useState<PopularMovie[]>([])

    useEffect(()=>{
        const fetchMovies = async () => {
            try{ 
                const res = await axios.get("/api/movies/popularMovies")
                setMovies(res.data)

            }catch(error){
                console.error("ERRROR al obtener ranked movies", error)
            }
        }

        fetchMovies();
    },[])
    

    return(
        <section>
            <h3 className="text-4xl p-10">Las Mejores Peliculas en Netflix</h3>
            <ul className="w-auto grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 ">
                {
                    movies.map(movie=>(
                        <MovieCard key={movie.id} movie={movie}/>
                    ))
                }
            </ul>
        </section>
    )
}