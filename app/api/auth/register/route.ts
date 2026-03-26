import { getRandomAvatar } from "@/data/avatarsProfile";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const hashedPassword = await bcrypt.hash(body.password, 10);

    const newUser = await prisma.user.create({
      data: {
        email: body.email,      
        password: hashedPassword, 
        name: body.name ?? null, 
        image: body.image
      },
    });

    await prisma.userNetflix.create({
      data: {
        profileName: "Perfil 1",
        avatarUrl: getRandomAvatar().avatarUrl, // opcional
        userId: newUser.id,
      },
    });
    
    return Response.json(newUser);

  } catch (error) {
    console.error(error);
    return new Response("Error", { status: 500 });
  }
}