"use client"

import { CarouselMovies } from "./CarouselMovies"
import { Movie } from "@/generated/prisma/client"
import { useLovedMovies } from "@/hooks/useLovedMovies"

import axios from "axios"
import { useEffect, useState } from "react"



export function ListMovies(){
    const [movies, setMovies] = useState<Movie[]>([])
    const lovedMoviesFromStore = useLovedMovies()

    useEffect(()=>{
        const fetchMovies = async () => {
            try{
                const res = await axios.get("/api/movies/normalMovies")
                setMovies(res.data)
            }catch(error){
                console.error("error al obtener las peliculas",error)
            }
        }
        fetchMovies()
    },[])


    return(
        <section>
            <CarouselMovies movies={movies} title={"Lista de Peliculas"}/>
            
            <CarouselMovies movies={lovedMoviesFromStore} title={"Peliculas Favoritas"} />
        </section>
    )
}