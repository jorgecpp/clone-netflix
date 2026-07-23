"use client"

import { Navbar } from "@/components/shared/navBar";
import { useFavoriteMoviesStore } from "@/stores/favoriteMovies.store";
import { CarouselMovies } from "@/components/shared/listMovies/CarouselMovies";

export default function MyListPage(){
    const { moviesLoved } = useFavoriteMoviesStore()
    return(
        <section>
            <Navbar/>
            <CarouselMovies movies={moviesLoved} title={"Peliculas Favoritas"} />
        </section>
    )
}