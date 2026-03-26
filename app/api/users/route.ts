import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    try{
        const profile = await prisma.userNetflix.findMany();

        return NextResponse.json(profile);

    }catch(error){
        console.error(error);

        return NextResponse.json(
            {message: "error al obtener usuarios"},
            {status: 500}
        );
    }
}


