"use client"

import { ChevronDown, Play } from "lucide-react";
import { PropsPopularMovies } from "./MovieCard.type";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Genre } from "@/components/movies/Genre";
import { useMovieTrailer } from "@/hooks/useMovieTrailer";

export function HoverMovieCard({movie, index}: PropsPopularMovies){
    const router = useRouter()
    const { trailer } = useMovieTrailer(movie.id)
    

    return(
        <div className=" absolute shadow-2xl bg-zinc-900 w-auto h-auto rounded-md  transition-all duration-300">
            {trailer && (
                <iframe
                    className="w-90 h-60"
                    src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1`}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                />
            )}

            <div className="flex justify-between mt-4 p-5">
                <Button 
                size="icon" 
                variant={"ghost"} 
                className="bg-slate-50 rounded-full flex items-center justify-center"
                onClick={()=>router.push(`/watch/${movie.id}`)}
                >
                    <Play className="text-zinc-900 fill-zinc-900 h-3 w-3"/>
                </Button> 

                <Button size="icon" variant={"ghost"} className="border-2 border-gray-400 rounded-full flex items-center justify-center">
                    <ChevronDown color="gray"/>  
                </Button>
            </div>
            
            {/*
            <div className="flex gap-1 p-5 items-center ">
                <div className="bg-red-500 rounded-md p-1">
                    +{movie.age}
                </div>

                <div className="rounded-md p-1">
                    {movie.duration}
                </div>

                <HdIcon/>
            </div>
            */
            }

            
            <Genre movie={movie}/>
            
            
        </div>
    )
}
