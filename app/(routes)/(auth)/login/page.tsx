import { Checkbox } from "@/components/ui/checkbox"
import { Terms } from "../components/terms"
import { LoginForm } from "./loginForm"
import Link from "next/link"

export default function LoginPage(){
    return(

        <label className="bg-black/80 h-150 w-150 flex flex-col items-center justify-center p-4 rounded-sm gap-4">
            <h1 className="text-4xl">Iniciar Sesion</h1>
            <LoginForm/>
            <span className="hover:text-zinc-500">¿Has olvidado tu contraseña?</span>
            <div className="flex items-center gap-2">
                <Checkbox/>
                Recuerdame
            </div>

            <div className="flex gap-2"> 
                <p>¿Todavia sin Netflix?</p>
                <Link  className="text-white/50 hover:text-white transition duration-300" href="/register">Suscribete ya</Link>
            </div>
            <Terms/>
        </label>
            
    )
}