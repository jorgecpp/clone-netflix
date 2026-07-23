import { useGenreStore } from "@/stores/genre.store";
import { Movie } from "@/types/movie.type";

type Props = {
    movie: Movie
}

export function Genre({movie}: Props){
    const { getGenreName } = useGenreStore()
    return(
        <div className="flex gap-2 flex-wrap p-5">
            {movie.genre_ids.map((id) => (
                <span
                    key={id}
                    className="text-sm text-zinc-300"
                >
                    {getGenreName(id)}
                </span>
            ))}
        </div>
    )
}
