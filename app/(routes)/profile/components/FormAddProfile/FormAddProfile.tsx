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

export function FormAddProfile () {
    const form = useForm<z.infer<typeof addProfileSchema>>({
        resolver: zodResolver(addProfileSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    })

    const onSubmit = async (data: z.infer<typeof addProfileSchema>) => {
        try{
            const res = await axios.post("/api/auth/login",{
                email: data.email,
                password: data.password
            });

            if(res.status == 200 || res.status == 201){
                toast.success("Login Exitoso")
            }

        }catch(error: any){
            toast.error(error.response?.data || "Error al iniciar sesión")
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
                    name="email"
                    control={form.control}
                    render={({ field, fieldState})=>(
                        <Field data-invalid = {fieldState.invalid}>
                            <Label htmlFor="name-1">Usuario</Label>
                            <Input 
                                {...field}
                                id="name-1"
                                placeholder="Usuario@gamil.com"
                            />

                            {fieldState.error && (
                                <p className="text-red-500 text-sm">
                                    {fieldState.error.message}
                                </p>
                            )}
                        </Field>
                    )}
                />

                <Controller
                    name="password"
                    control={form.control}
                    render={({field, fieldState})=>(
                        <Field data-invalid={fieldState.invalid}>
                            <Label htmlFor="username-1">Password</Label>
                            <Input
                                {...field}
                                id="username-1"
                                type="password"
                                placeholder="****************"
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
                            <Button type="submit" className="hover:bg-zinc-500 transition duration-300">Save changes</Button>
                </DialogFooter>
            </FieldGroup>
        </form>
    )
}
