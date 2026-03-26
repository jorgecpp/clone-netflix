import { Toaster } from "sonner";
import { Profiles } from "./components/Profiles"



export default function Profile(){
    

    return(
        <div className="relative min-h-screen flex flex-col justify-center items-center bg-zinc-900">
            <h1 className="text-5xl mb-8 text-white">
                ¿Quién eres? Elige tu perfil
            </h1>
            
            <Profiles/>

            <div>
                <Toaster/>
            </div>
        </div>
    )
}