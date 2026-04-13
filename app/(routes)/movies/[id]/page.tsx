import { Navbar } from "@/components/shared/navBar";
import { prisma } from "@/lib/prisma";

export default async function MoviePage({params}: { params: Promise<{id: string}>}){
    return(
        <div>
            Movie Info page
        </div>
    )
}