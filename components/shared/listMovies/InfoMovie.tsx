
import { Movie } from "@/generated/prisma/client";
import { Hd } from "lucide-react";
type HoverMovieProps={
  movie: Movie
}
export function InfoMovie({movie}:HoverMovieProps){
    return(
        <div className="flex gap-4 text-white items-center">
            <div className="bg-red-500 p-1  rounded-md">
                +{movie.age}
            </div>

            <p>
                {movie.duration}
            </p>

            <Hd/>
        </div>
    )
}