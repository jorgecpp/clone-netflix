import * as z from "zod"

export const formSchema = z.object({
    name: z
        .string()
        .min(3, "el user name debe tener minimo 3 caracteres"),
    email: z
        .string()
        .min(5, "Bug title must be at least 5 characters.")
        .max(32, "Bug title must be at most 32 characters."),
    password: z
        .string()
        .min(5, "la contraseña debe tener minimo 5 caracteres"),
    repetPassword: z
        .string()
        .min(5, "la contraseña no coencide")
})
