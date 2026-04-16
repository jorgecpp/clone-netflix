import * as z from "zod"

export const addProfileSchema = z.object({
    profileName: z
        .string()
        .min(5, "Bug title must be at least 5 characters.")
        .max(32, "Bug title must be at most 32 characters."),
})