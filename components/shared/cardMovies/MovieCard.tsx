"use client"

import { HoverMovieCard } from "./HoverMovieCard"
import { useState } from "react"
import { PropsPopularMovies } from "./MovieCard.type"
import { rankingMovies } from "@/data/rankingMovies"

export function MovieCard({ movie, index } : PropsPopularMovies){
    const [isHovered, setIsHovered] = useState(false)

    return(
        <li 
            className={"relative flex w-70 h-70 justify-center"}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            key={movie.id}  
        >   
            {rankingMovies[index] && (
                <img
                    src={rankingMovies[index].positionUrl}
                    alt={`Top ${index + 1}`}
                    width={80}
                    height={120}
                    className="absolute left-0 bottom-0 z-10"
                />
            )}
            
            <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                className="ml-16 z-10 rounded-md"
            />

            <div className={`absolute flex w-70 h-70  transition-all 
                duration-300 ease-in-out z-10
                ${isHovered ? "opacity-100 scale-100":"opacity-0 scale-90"}`}>
                <HoverMovieCard movie={movie} index={index}/>
            </div>
        </li>
    )
}
