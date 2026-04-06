import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
    try{
        const body = await req.json()

        const popularMovies = await prisma.popularMovie.create({
            data: {
                age: body.age,
                duration: body.duration,
                genre: body.genre,
                movieVideo: body.movieVideo,
                ranking: body.ranking,
                thumbnailUrl: body.thumbnailUrl,
                title: body.title,
                trailerVideo: body.trailerVideo
            }
        })

        return Response.json(popularMovies)
    }catch(error){
        return new Response("Error", {status:500})
    }
}

export async function GET() {
    try{
        const popularMovies = await prisma.popularMovie.findMany();

        return  NextResponse.json(popularMovies)
    }catch(error){
        console.error(error)
        return NextResponse.json(
            {message: "error al obtener peliculas"},
            {status: 500}
        )
    }
}
