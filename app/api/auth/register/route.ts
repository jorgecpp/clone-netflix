import { getRandomAvatar } from "@/data/avatarsProfile";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const hashedPassword = await bcrypt.hash(body.password, 10);


    const existingUser = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });

    if (existingUser) {
      return new Response("El usuario ya existe", { status: 400 });
    }

    const newUser = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,      
        password: hashedPassword, 
        image: body.image
      },
    });


    return Response.json(newUser);

  } catch (error) {
    console.error(error);
    return new Response("Error", { status: 500 });
  }
}
