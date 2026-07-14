import { Movie } from "@/types/movie.type"
import Image from "next/image"
type Props = {
    movie: Movie
}

export function MovieCard({movie}: Props){
    return(
        <li key={movie.id} className="flex flex-col items-center cursor-pointer hover:scale-110 transition duration-300">
            <Image
            src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`: "/no-image.png"}
            alt={movie.title}
            width={300}
            height={450}
            className="rounded-lg"
            />
            {movie.title}
        </li>
    )
}
