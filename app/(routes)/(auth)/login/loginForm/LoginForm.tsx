"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"

import * as z from "zod"

import { Button } from "@/components/ui/button"

import {
  Field,
  FieldError,
  FieldGroup,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { formSchema } from "./loginFrom.form" 
import axios from "axios"
import { toast } from "sonner"
import { useRouter } from "next/navigation"


export function LoginForm() {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    },
  })

  async function onSubmit(data: z.infer<typeof formSchema>) {
    
    try{
      const res = await axios.post("/api/auth/login",{
        email: data.email,
        password: data.password,
      });

      if(res.status == 200 || res.status == 201)
      {
        toast.success("Login exitoso")
        router.push("/profile")
      }

    }catch(error: any){
      toast.error(error.response?.data || "Error al iniciar sesión")
    }
  }

  return (
    <form className="w-100 " id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
        <FieldGroup>
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

            <Button className="bg-[#E50914] w-full" type="submit" form="form-rhf-demo">
                iniciar sesión
            </Button>
        </FieldGroup>
    </form>
    
  )
}
