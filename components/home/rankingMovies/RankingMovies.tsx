"use client"

import { MovieCard } from "@/components/shared/cardMovies/MovieCard";
import { useTmdbMovies } from "@/hooks/useTmdbMovies";
import { useGenreStore } from "@/stores/genre.store";
import { useEffect } from "react";

export function Ranking(){
    const { rankedMovies } = useTmdbMovies()
    const { loadGenres } = useGenreStore()
    
    useEffect(()=>{
        loadGenres()
    },[])

    return(
        <section className="w-auto">
            <h3 className="text-4xl p-10">Las Mejores Peliculas en Netflix</h3>
            <ul className="w-auto grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 ">
                {
                    rankedMovies.map((movie, i) => (
                        <MovieCard key={movie.id} movie={movie} index={i}/>
                    ))
                }
            </ul>
        </section>
    )
}
