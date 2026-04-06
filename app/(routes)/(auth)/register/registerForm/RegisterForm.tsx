"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import axios from "axios";
import * as z from "zod"

import { Button } from "@/components/ui/button"

import {
  Field,
  FieldError,
  FieldGroup,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { formSchema } from "./registerForm.form"
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { getRandomAvatar } from "@/data/avatarsProfile";


export function RegisterForm() {

  const router = useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      repetPassword: ""
    },
  })

  async function onSubmit(data: z.infer<typeof formSchema>) {
    
    try {
      const res = await axios.post("/api/auth/register", {
        name: data.name,
        email: data.email,
        password: data.password,
        image: getRandomAvatar().avatarUrl
      }); 

      if(res.status === 200 || res.status === 201){
        toast.success("Usuario registrado correctamente")
        router.push("/profile")
      }

      

    } catch (error) {
      console.error(error)
      toast.success("Algo salio mal")
    }
  }

  return (
    <form className="w-100 " id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
        <FieldGroup>
            <Controller
                name="name"
                control={form.control}
                render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                    <Input
                    {...field}
                    id="form-rhf-demo-title"
                    aria-invalid={fieldState.invalid}
                    placeholder="Raul"
                    autoComplete="off"
                    />
                    {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                    )}
                </Field>
                )}
            />
            <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                    <Input
                    {...field}
                    id="form-rhf-demo-title"
                    aria-invalid={fieldState.invalid}
                    placeholder="usuario@gmail.com"
                    autoComplete="off"
                    />
                    {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                    )}
                </Field>
                )}
            />

            <Controller
                name="password"
                control={form.control}
                render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                    <Input
                    {...field}
                    id="form-rhf-demo-title"
                    aria-invalid={fieldState.invalid}
                    placeholder="*****************"
                    autoComplete="off"
                    />
                    {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                    )}
                </Field>
                )}
            />

            <Controller
                name="repetPassword"
                control={form.control}
                render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                    <Input
                    {...field}
                    id="form-rhf-demo-title"
                    aria-invalid={fieldState.invalid}
                    placeholder="*****************"
                    autoComplete="off"
                    />
                    {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                    )}
                </Field>
                )}
            />

            <Button className="bg-[#E50914] w-full" type="submit" form="form-rhf-demo">
              Registrarse
            </Button>
        </FieldGroup>
    </form>
    
  )
}
