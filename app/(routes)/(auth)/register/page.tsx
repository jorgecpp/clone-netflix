import { Terms } from "@/components/auth/Terms"
import { Checkbox } from "@/components/ui/checkbox"
import { RegisterForm } from "./registerForm"
import Link from "next/link"

export default function RegisterPage(){
    return(
        <label className="bg-black/80 h-150 w-150 flex flex-col items-center justify-center p-4 rounded-sm gap-4">
            <h1 className="text-4xl">Registrate</h1>
            <RegisterForm/>
            <div className="flex items-center gap-2">
                <Checkbox/>
                Recuerdame
            </div>

            <div className="flex gap-2">
                <p className="text-white">¿Ya tienes cuenta?</p>
                <Link href="/login" className="text-white/50 hover:text-white transition duration-300">Inicia Sesion Aqui</Link>
            </div>
            <Terms/>
        </label>
    )
}