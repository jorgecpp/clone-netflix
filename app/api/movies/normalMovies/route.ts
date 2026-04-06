import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
    try {
        const body = await req.json()

        const movie = await prisma.movie.create({
            data: {
                age: body.age,
                duration: body.duration,
                genre: body.genre,
                title: body.title,
                movieVideo: body.movieVideo,
                thumbnailUrl: body.thumbnailUrl,
                trailerVideo: body.trailerVideo
            },
        })

        return Response.json(movie)
        
    } catch (error) {
        return new Response("Error", { status:500 })
    }
}

export async function GET() {
    try{
        const movie = await prisma.movie.findMany()

        return NextResponse.json(movie)
    }catch(error){
        console.log(error)

        return NextResponse.json(
            {message: "Error al recuperar las peliculas"},
            {status: 500}
        )
    }
    
}
