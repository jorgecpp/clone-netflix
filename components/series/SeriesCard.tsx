import { Serie } from "@/types/movie.type";
import Image from "next/image";
import { useRouter } from "next/navigation";
type SeriesCardProps = {
    serie: Serie
}

export function SeriesCard({serie}: SeriesCardProps){
    const router = useRouter()
    
    return(
        <li 
        onClick={()=>router.push(`/watch/${serie.id}`)}
        className="group hover:scale-110 hover:z-20 transition-all duration-300 cursor-pointer">
            <Image
                alt={"serie"}
                src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
                className="rounded-lg"
                width={450}
                height={300}
            />

            <div
            className="
                absolute left-0 right-0 bottom-0 opacity-0 translate-y-2 transition-all duration-300
                group-hover:opacity-100 group-hover:translate-y-0 bg-linear-to-t from-black to-transparent
                p-4 rounded-b-lg
            "
            >
                <h3 className="font-semibold ">
                    {serie.original_name}
                </h3>

                <p className="text-sm text-gray-300">
                    ⭐ {serie.vote_average}
                </p>
            </div>
        </li>
    )
}
