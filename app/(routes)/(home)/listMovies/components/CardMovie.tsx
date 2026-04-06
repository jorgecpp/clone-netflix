"use client"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { HoverMovieList } from "./HoverMovieList"
import { Movie } from "@/generated/prisma/client"

type HoverMovieProps={
    movie: Movie
}

export function CardMovie({movie}:HoverMovieProps){
    const [isHovered, setIsHovered] = useState(false)

    return(
        <Card 
            className="
            cursor-pointer group relative border-none
            bg-transparent  hover:border-primary transition-colors
            " 
            onMouseEnter={()=> setIsHovered(true)} 
            onMouseLeave={()=>setIsHovered(false)}>
                                
            <CardContent 
                className="
                rounded-md w-full 
                "
            >

                <img
                    src={movie.thumbnailUrl}
                    alt="movie image"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="rounded-md"
                />

                
                
            </CardContent>
            <div className="
                absolute top-0 left-0 
                w-90
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
