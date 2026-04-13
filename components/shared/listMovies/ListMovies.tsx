"use client"

import { CarouselMovies } from "./CarouselMovies"
import { useLovedMovies } from "@/hooks/useLovedMovies"
import { useMovies } from "@/hooks/useMovies"

export function ListMovies(){
    const {movies} = useMovies("/api/movies/normalMovies")
    const lovedMoviesFromStore = useLovedMovies()

    return(
        <section>
            <CarouselMovies movies={movies} title={"Lista de Peliculas"}/>
            
            <CarouselMovies movies={lovedMoviesFromStore} title={"Peliculas Favoritas"} />
        </section>
    )
}