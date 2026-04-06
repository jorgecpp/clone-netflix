import { useLovedFilms } from "@/hooks/use-loved-movie"
import { useCurrentNetflix } from "@/hooks/use-current-user"
import { Movie } from "@/generated/prisma/client"

export function useLovedMovies(): Movie[] {
  const { currentUser } = useCurrentNetflix()

  const userId = currentUser?.id

  const lovedMoviesFromStore = useLovedFilms(
    state => (userId ? state.lovedFilmsByUser[userId] : undefined)
  )

  return lovedMoviesFromStore ?? []
}