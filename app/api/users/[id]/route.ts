import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

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
