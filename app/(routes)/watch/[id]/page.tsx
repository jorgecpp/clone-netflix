import { Navbar } from "@/components/shared/navBar";
import { WatchClient } from "@/components/watchMovie/WatchClient";

export default async function WatchPage({params}: { params: Promise<{id: number}>}){
    const {id} = await params

    return(
        <div className="h-screen flex flex-col">
            <Navbar/>
            <WatchClient id={id}/>
        </div>
    )
}