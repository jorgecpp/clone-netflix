import { ChevronDown, DroneIcon, HdIcon, Play } from "lucide-react";
import { PropsPopularMovies } from "./MovieCard.type";
import { Genre } from "./Genre";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function HoverMovieCard({movie}: PropsPopularMovies){
    const router = useRouter()
    return(
        <div className=" absolute shadow-2xl bg-zinc-900 w-auto h-auto rounded-md  transition-all duration-300">
            <iframe src={movie.trailerVideo} className="w-90 h-60"  
                allow="autoplay; fullscreen; encrypted-media"
                allowFullScreen
            />

            <div className="flex justify-between mt-4 p-5">
                <Button 
                size="icon" 
                variant={"ghost"} 
                className="bg-slate-50 rounded-full flex items-center justify-center"
                onClick={()=>router.push(`/watch/${movie.id}`)}
                >
                    <Play className="text-zinc-900 fill-zinc-900 h-3 w-3"/>
                </Button> 

                <Button size="icon" variant={"ghost"} className="rounded-full"> 
                    <ChevronDown width={50} height={50}/>
                </Button>
            </div>
            
            <div className="flex gap-1 p-5 items-center ">
                <div className="bg-red-500 rounded-md p-1">
                    +{movie.age}
                </div>

                <div className="rounded-md p-1">
                    {movie.duration}
                </div>

                <HdIcon/>
            </div>

            <div className="flex gap-5 p-5 mb-5 items-center ">
                <Genre genre={movie.genre}/>
            </div>

        </div>
    )
}