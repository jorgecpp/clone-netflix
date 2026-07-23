"use client"

import { ChevronDown, Play, ThumbsUp, X } from "lucide-react";
import { Movie } from "@/types/movie.type";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Genre } from "@/components/movies/Genre";
import { useFavoriteMoviesStore } from "@/stores/favoriteMovies.store";

type HoverMovieProps={
  movie: Movie
}

export function HoverMovieList({ movie }: HoverMovieProps) {
  const router = useRouter()

  const {addFavoriteMovie, isFavorite, deleteFavoriteMovie } = useFavoriteMoviesStore()
  
  return (
    <div className="w-full rounded-lg overflow-hidden bg-zinc-900">
      <img
        src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
        className="w-full aspect-video object-cover rounded-md"
      />

      <h3 className="text-white font-semibold p-5">{movie.title}</h3>
      
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
            if(isFavorite(movie.id)){
              deleteFavoriteMovie(movie.id)
            }else{
              addFavoriteMovie(movie)
            }
          }}
          >
            {isFavorite(movie.id) ? <X/>: <ThumbsUp/>}
          </Button>
          
        </div>

        <Button size="icon" variant={"ghost"} className="border-2 border-gray-400 rounded-full flex items-center justify-center">
          <ChevronDown color="gray"/>  
        </Button>

          
      </div>
      
      <Genre movie={movie}/>  
    </div>
  )
}
