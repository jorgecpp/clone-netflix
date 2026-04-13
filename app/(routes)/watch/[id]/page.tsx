import { Navbar } from "@/components/shared/navBar";
import { prisma } from "@/lib/prisma";

export default async function WatchPage({params}: { params: Promise<{id: string}>}){
    const {id} = await params

    const [popular, normal] = await Promise.all([
        prisma.popularMovie.findUnique({where: {id}}),
        prisma.movie.findUnique({where: {id}})
    ])

    const movie = popular || normal

    return(
        <div className="h-screen flex flex-col">
            <Navbar/>
            <iframe src={movie?.movieVideo} 
            allow="autoplay; fullscreen; encrypted-media" 
            allowFullScreen
            className="flex-1 w-full"
            />
        </div>
    )
}