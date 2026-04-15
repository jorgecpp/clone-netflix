import { Navbar } from "@/components/shared/navBar";
import { SliderVideos } from "@/components/shared/sliderVideos/SliderVideos";

import { prisma } from "@/lib/prisma";



export default async function MoviePage({params}: { params: Promise<{id: string}>}){
    const {id} = await params

    const [popular, normal] = await Promise.all([
        prisma.popularMovie.findUnique({where: {id}}),
        prisma.movie.findUnique({where: {id}})
    ])

    const movie = popular || normal

    if (!movie) {
        return <div className="text-white">Película no encontrada</div>
    }

    return(
        <div>
            
            <div className="relative w-full h-200 overflow-hidden" >
                <iframe
                    src={movie?.trailerVideo}
                    className="absolute top-0 left-0 w-full h-full -z-10"
                    title="Tráiler de la película"
                    allow="autoplay"
                    style={{ border: "none"}}
                />
                <Navbar/>

                <SliderVideos id={movie.id}/>

                <div className="top-0 left-0 w-full h-full 
                    bg-linear-to-b
                    from-black/0 
                    via-black/50 
                    to-[#171717]"
                />
                
            </div>
        </div>
    )
}