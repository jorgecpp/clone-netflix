"use client"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { HoverMovieList } from "./HoverMovieList"
import { Movie } from "@/types/movie.type"

type HoverMovieProps={
    movie: Movie
}

export function CardMovie({movie}:HoverMovieProps){
    const [isHovered, setIsHovered] = useState(false)

    return(
        <Card 
            className="
            relative
            overflow-visible
            border-none
            bg-transparent
            " 
            onMouseEnter={()=> setIsHovered(true)} 
            onMouseLeave={()=>setIsHovered(false)}>
                                
            <CardContent className="p-0 rounded-lg overflow-hidden aspect-video">
                <img
                src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
                alt={movie.title}
                className="w-full h-full object-cover"
                />
            </CardContent>
            <div className="
                absolute top-0 left-0 w-full
                bg-zinc-900 rounded-lg z-50

                scale-95 translate-y-4
                group-hover:opacity-100
                group-hover:scale-100
                group-hover:translate-y-0

                transition-all duration-300 ease-out"
            >

                {isHovered && 
                    <HoverMovieList 
                    movie={movie} />
                }
            </div>
        </Card>     
    )
}
