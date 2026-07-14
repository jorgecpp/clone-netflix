import { Movie } from "@/types/movie.type";
import { MovieCard } from "./MovieCard";
type Props = {
    movies: Movie[]
}

export function MovieGrid( {movies}: Props ){
    return(
        <ul className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 items-center justify-center">
            {
                movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie}/>
                ))
            }
        </ul>
    )
}
