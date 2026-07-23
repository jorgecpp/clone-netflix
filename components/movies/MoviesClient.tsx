"use client"
import { useTmdbMovies } from "@/hooks/useTmdbMovies"
import { MovieSearch } from "./MovieSearch"
import { MovieGrid } from "./MovieGrid"
import { MovieGridSkeleton } from "./MovieGridSkeleton"


export function MoviesClient(){
    const { movies, search, setSearch, loading } = useTmdbMovies()

    return(
        <main className="flex flex-col mx-auto max-w-7xl ">
            {/* Encabezado */}
            <section className="space-y-2 text-center">
                <h1 className="text-4xl">Movies</h1>

                <p className="text-muted-foreground">
                    Discover your next favorite movie.
                </p>
            </section>

            {/* Buscador */}
            <section className="mb-10 flex justify-center">
                <MovieSearch search={search} onChange={setSearch}/>
            </section>

            {/* Grid de películas */}
            <section className="w-full">
                {loading ?(
                    <MovieGridSkeleton/>
                ): (
                    <MovieGrid movies={movies}/>
                )}
            </section>
        </main>
    )
}