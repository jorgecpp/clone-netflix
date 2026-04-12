"use client"

import { HoverMovieCard } from "./components/HoverMovieCard"
import { useState } from "react"
import { PropsPopularMovies } from "./MovieCard.type"


export function MovieCard({ movie } : PropsPopularMovies){
    const [isHovered, setIsHovered] = useState(false)

    return(
        <li 
            className={"relative flex w-70 h-70 justify-center"}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            key={movie.id}  
        >
            <img src={`/ranking/${movie.ranking}.png`}/>
            <img src={movie.thumbnailUrl}/>

            <div className={`absolute flex w-70 h-70  transition-all 
                duration-300 ease-in-out z-10
                ${isHovered ? "opacity-100 scale-100":"opacity-0 scale-90"}`}>
                <HoverMovieCard movie={movie}/>
            </div>
        </li>
    )
}