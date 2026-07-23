import { Movie } from "@/types/movie.type"
import Image from "next/image"
import { useRouter } from "next/navigation"
type Props = {
    movie: Movie
}

export function MovieCard({movie}: Props){
    const router = useRouter()
    
    return(
        <li 
        onClick={()=>router.push(`/watch/${movie.id}`)}
        className="
        flex flex-col items-center cursor-pointer hover:scale-110 transition-all duration-300
        group relative hover:z-20
        ">
            <Image
            src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`: "/no-image.png"}
            alt={movie.title}
            width={300}
            height={450}
            className="rounded-lg"
            />

            <div 
            className="
            absolute bottom-0 left-0 right-0 opacity-0 translate-y-2 transition-all duration-300 
            group-hover:opacity-100 group-hover:translate-y-0 bg-linear-to-t from-black to-transparent 
            rounded-b-lg p-4
            "
            >
                <h3 className="font-semibold">
                    {movie.title}
                </h3>

                <p className="text-sm text-gray-300">
                    ⭐ {movie.vote_average}
                </p>

            </div>
        </li>
    )
}
