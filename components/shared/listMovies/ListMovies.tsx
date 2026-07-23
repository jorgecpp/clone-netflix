"use client"

import { CarouselMovies } from "./CarouselMovies"
import { useTmdbMovies } from "@/hooks/useTmdbMovies"
import { useFavoriteMoviesStore } from "@/stores/favoriteMovies.store"

export function ListMovies(){
    const { movies } = useTmdbMovies()
    const { moviesLoved } = useFavoriteMoviesStore()

    return(
        <section>
            <CarouselMovies movies={movies} title={"Lista de Peliculas"}/>
            
            <CarouselMovies movies={moviesLoved} title={"Peliculas Favoritas"} />
        </section>
    )
}
