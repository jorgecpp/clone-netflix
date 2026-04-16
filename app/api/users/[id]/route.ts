import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {

  try {
    const {id: userId} = await params

    if(!userId){
      return NextResponse.json(
        {message: "userId requeried"},
        {status: 400}
      )
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        userNetflix: true   
      }
    })

    return NextResponse.json(user?.userNetflix)

  } catch (error) {
    console.error(error)

    return NextResponse.json(
      { message: "error al obtener perfiles" },
      { status: 500 }
    )
  }
}

export async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;

    console.log("Eliminando perfil:", id);

    if (!id) {
      return NextResponse.json(
        { message: "ID no recibido" },
        { status: 400 }
      );
    }

    const profile = await prisma.userNetflix.findUnique({
      where: { id },
    });

    if (!profile) {
      return NextResponse.json(
        { message: "Perfil no encontrado" },
        { status: 404 }
      );
    }

    await prisma.userNetflix.delete({
      where: { id },
    });

    return NextResponse.json({ message: "Perfil eliminado" });

  } catch (error) {
    console.error("ERROR REAL:", error);

    return NextResponse.json(
      { message: "Error al eliminar perfil" },
      { status: 500 }
    );
  }
}
