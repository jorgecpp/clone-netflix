"use client"
import { PlusCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { FormAddProfile } from "../FormAddProfile";
import { UserNetflix } from "@/generated/prisma/client";

interface AddProfileProps {
    onProfileCreated: (newProfile: UserNetflix) => void
}

export function AddProfile({onProfileCreated}: AddProfileProps){
    
    
    return(
        <div className="flex flex-col gap-4 items-center justify-center">
            <Dialog>
                <DialogTrigger asChild>
                    <PlusCircle color="#A1A1AA" className="w-20 h-20 cursor-pointer"/>
                </DialogTrigger>
                <DialogContent className="bg-black ">
                    <FormAddProfile onProfileCreated={onProfileCreated}/>                     
                </DialogContent>
            </Dialog>
            <p className="uppercase text-zinc-400 ">añadir perfil</p>
        </div>
    )
}
