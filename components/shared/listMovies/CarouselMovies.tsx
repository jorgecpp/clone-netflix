"use client"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


import { MoviesProps } from "./CarouselMovies.type"
import { CardMovie } from "./CardMovie"

export function CarouselMovies({movies, title}:MoviesProps){

    return(
        <div>
            <h3 className="text-white text-4xl p-10 max-w-150">{title}</h3>
            <Carousel className="w-full h-auto">
                
                <CarouselContent className="pointer-events-none gap-5 h-100">
                    {movies.map(movie =>(
                        <CarouselItem 
                            key={movie.id}
                            className="
                            pl-1 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 group relative pointer-events-auto 
                            h-full
                            "
                        > 
                            <CardMovie movie={movie}/>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <CarouselPrevious className="left-2 bg-black/50 hover:bg-red-500 text-white hidden sm:flex items-center justify-center" />
                <CarouselNext className="right-2 bg-black/50 hover:bg-red-500 text-white hidden sm:flex items-center justify-center" />
                
            </Carousel>
        </div>
    )
}
