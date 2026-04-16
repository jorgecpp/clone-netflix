import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req:Request){
  try{
    const body = await req.json()

    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });

    if(!user){
      return new Response("Usuario no encontrado", {status: 404});
    }

    const isCorrect = await bcrypt.compare(
      body.password,
      user.password || ""
    );

    if(!isCorrect){
      return new Response("Contraseña incorrecta", {status: 401});
    }

    return Response.json({
      message: "Login exitoso",
      user,
    })
    
  }catch(error){
    console.error(error);
    return new Response("Error", {status: 500});
  }
}