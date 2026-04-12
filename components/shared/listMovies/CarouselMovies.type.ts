import { Movie } from "@/generated/prisma/client"

export type MoviesProps={
    movies: Movie[]
    title: string
}
