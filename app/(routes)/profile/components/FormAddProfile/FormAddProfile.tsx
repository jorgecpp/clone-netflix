import * as z from "zod"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Controller, useForm } from "react-hook-form"
import { addProfileSchema } from "../AddProfile/AddFormSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import axios from "axios"
import { toast } from "sonner"

import { useCurrentNetflix } from "@/stores/userNetflix.store"

export function FormAddProfile ({onProfileCreated}: any) {
    const { userId } = useCurrentNetflix()

    const form = useForm<z.infer<typeof addProfileSchema>>({
        resolver: zodResolver(addProfileSchema),
        defaultValues: {
            profileName: ""
        }
    })

    const onSubmit = async (data: z.infer<typeof addProfileSchema>) => {
        try{
            if(!userId) return

            const res = await axios.post(`/api/users`,{
                profileName: data.profileName,
                userId
            });

            if(res.status == 200 || res.status == 201){
                onProfileCreated(res.data)
                toast.success("Perfil creado con exito")
            }

        }catch(error: any){
            toast.error(error.response?.data || "Error al crear perfil")
        }
    }

    return(
        <form onSubmit={form.handleSubmit(onSubmit)}>
            <DialogHeader>
                <DialogTitle>Editar Perfil</DialogTitle>
                <DialogDescription>
                    Añade más perfiles
                </DialogDescription>
            </DialogHeader>

            <FieldGroup>
                <Controller
                    name="profileName"
                    control={form.control}
                    render={({ field, fieldState})=>(
                        <Field data-invalid = {fieldState.invalid}>
                            <Label htmlFor="name-1">Nombre de Usuario</Label>
                            <Input 
                                {...field}
                                id="name-1"
                                placeholder="Jorge"
                            />

                            {fieldState.error && (
                                <p className="text-red-500 text-sm">
                                    {fieldState.error.message}
                                </p>
                            )}
                        </Field>
                    )}
                />

                <DialogFooter>
                    <DialogClose asChild>
                        <Button className="hover:bg-zinc-500 transition duration-300">Cancel</Button>
                    </DialogClose>
                    <Button type="submit" className="hover:bg-zinc-500 transition duration-300">Añadir Perfil</Button>
                </DialogFooter>
            </FieldGroup>
        </form>
    )
}
