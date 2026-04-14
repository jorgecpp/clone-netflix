import { Navbar } from "@/components/shared/navBar";
import { prisma } from "@/lib/prisma";

export default async function MoviePage({params}: { params: Promise<{id: string}>}){
    const {id} = await params

    const [popular, normal] = await Promise.all([
        prisma.popularMovie.findUnique({where: {id}}),
        prisma.movie.findUnique({where: {id}})
    ])

    const movie = popular || normal
    
    return(
        <div>
            <Navbar/>
            <div className="relative w-full h-70vh">
    
                <iframe
                    src={movie?.trailerVideo}
                    className="absolute top-0 left-0 w-full h-full"
                    allow="autoplay; fullscreen"
                    style={{ border: "none", height: "70vh" }}
                />

                <div className="absolute bg-linear-to-t from-black via-black/50 to-transparent"/>

                <p className="absolute bottom-10 left-10 text-white">
                    Las mejores peliculas
                </p>

            </div>
        </div>
    )
}