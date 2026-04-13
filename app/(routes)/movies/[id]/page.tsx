import { Navbar } from "@/components/shared/navBar";
import { prisma } from "@/lib/prisma";

export default async function MoviePage({params}: { params: Promise<{id: string}>}){
    const {id} = await params

    const movie = await prisma.movie.findUnique({
        where: {id}
    })

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