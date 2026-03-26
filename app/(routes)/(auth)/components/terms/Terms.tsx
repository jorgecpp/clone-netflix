'use client'

import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Terms () {

    const [information, setInformation] = useState(false)

    const moreInformation = () => {
        setInformation(!information)
    }

    return(
        <div className="text-sm text-zinc-500 gap-1">
            <p>
                esta web usa el reCatchap de google para verificar
                que no esteres un robot
            </p>
            <Button variant="ghost" className="text-blue-500 hover:bg-transparent p-0 ml-1 h-fit cursor-pointer" onClick={moreInformation}>Más Informacion</Button>
            <div>
                { information && 
                <p className="max-w-100">
                    La informacion recopilada por google reCaptchap esta sujeta a la politica de
                    privacidad y las condiciones de servicio de google, y se utiliza para proporcionar
                    , mantener yh mejorar el servicio de reChaptcha, asi como para fines generales e seguridad
                    google no la utiliza para publicidad personalizada
                </p>}
            </div>
        </div>
    )
}