import * as z from "zod"

export const addProfileSchema = z.object({
    email: z
        .string()
        .min(5, "Bug title must be at least 5 characters.")
        .max(32, "Bug title must be at most 32 characters."),
    password: z
        .string()
        .min(5, "la contraseña debe tener minimo 5 caracteres"),
})