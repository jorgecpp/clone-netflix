"use client"

import { ChevronDown, Play, ThumbsUp, X } from "lucide-react";

import { InfoMovie } from "./InfoMovie";

import { Movie } from "@/generated/prisma/client";
import { Button } from "@/components/ui/button";
import { Genre } from "@/components/shared/cardMovies/Genre";
import { useLovedFilms } from "@/hooks/use-loved-movie";
import { useLovedMovies } from "@/hooks/useLovedMovies";
import { useRouter } from "next/navigation";
type HoverMovieProps={
  movie: Movie
}

export function HoverMovieList({ movie }: HoverMovieProps) {
  const router = useRouter()

  const lovedMoviesFromStore = useLovedMovies()
  const isMyList = lovedMoviesFromStore.some(item => item.id === movie.id)

  const {addLovedFile, removeLovedItem} = useLovedFilms()
  return (
    <div>
      <img src={movie.thumbnailUrl} alt="image movie" width={200} height={200}
      className="cursor-pointer object-cover transition-all duration-300 shadow-xl w-full rounded-t-lg"
      onClick={()=>router.push(`/movies/${movie.id}`)}
      />  
      
      <div className="flex p-5 justify-between gap-4">
        <div className="flex gap-4">
          <Button 
          size="icon" 
          variant={"ghost"} 
          className="bg-slate-50 rounded-full flex items-center justify-center"
          onClick={()=>router.push(`/watch/${movie.id}`)}
          >
            <Play className="text-zinc-900 fill-zinc-900 h-3 w-3"/>
          </Button>                      
          <Button 
          size="icon" 
          variant={"ghost"} 
          className="text-slate-50 border-2 border-gray-400 rounded-full"
          onClick={()=>{
            if(isMyList){
              removeLovedItem(movie)
            }else{
              addLovedFile(movie)
            }
          }}
          >
            {isMyList ? <X/>: <ThumbsUp/>}
          </Button>
        </div>

        <Button size="icon" variant={"ghost"} className="border-2 border-gray-400 rounded-full flex items-center justify-center">
        <ChevronDown color="gray"/>  
        </Button>    
      </div>

      <InfoMovie movie={movie}/>

      <Genre genre={movie.genre}/>
    </div>
  )
}
