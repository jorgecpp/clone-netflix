import { getRandomAvatar } from "@/data/avatarsProfile"
import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
    try{
        const body = await req.json()

        console.log("BODY: ", body)

        if(!body.userId || !body.profileName) {
            return NextResponse.json(
                {message: "faltan datos"},
                {status: 400}
            )
        }

        const profile = await prisma.userNetflix.create({
            data:{
                profileName: body.profileName,
                userId: body.userId,
                avatarUrl: getRandomAvatar().avatarUrl
            }
        })

        return NextResponse.json(profile)

    }catch(e){
        console.error(e)
        return NextResponse.json(
            {message: "Error al crear perfil"},
            {status: 500 }
        )
    }
}