"use client"
import { useTmdbMovies } from "@/hooks/useTmdbMovies"
import { MovieSearch } from "./MovieSearch"
import { MovieGrid } from "./MovieGrid"
import { MovieGridSkeleton } from "./MovieGridSkeleton"
import { 
Pagination, 
PaginationContent, 
PaginationItem, 
PaginationPrevious, 
PaginationLink, 
PaginationNext,
PaginationEllipsis
} from "../ui/pagination"


export function MoviesClient(){
    const { movies, search, setSearch, loading, totalPages, page, setPage } = useTmdbMovies()

    const previousPage = () => {
        if(page > 1){
            setPage(page-1)
        }
    }

    const nextPage = () => {
        if(page < totalPages){
            setPage(page + 1)
        }
    }

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

            {/* Paginacion */}
            <section className="flex justify-center mt-10 mb-8">
                <Pagination>
                    <PaginationContent>

                        <PaginationItem>
                            <PaginationPrevious
                            onClick={previousPage}
                            className={page === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                            />
                        </PaginationItem>

                        {page > 2 && (
                            <>
                            <PaginationItem>
                                <PaginationLink onClick={() => setPage(1)}>
                                    1
                                </PaginationLink>
                            </PaginationItem>

                            {page > 3 && (
                                <PaginationItem>
                                <PaginationEllipsis />
                                </PaginationItem>
                            )}
                            </>
                        )}

                        {page > 1 && (
                            <PaginationItem>
                            <PaginationLink onClick={() => setPage(page - 1)}>
                                {page - 1}
                            </PaginationLink>
                            </PaginationItem>
                        )}

                        <PaginationItem>
                            <PaginationLink isActive className="text-black">
                                {page}
                            </PaginationLink>
                        </PaginationItem>

                        {page < totalPages && (
                            <PaginationItem>
                            <PaginationLink onClick={() => setPage(page + 1)}>
                                {page + 1}
                            </PaginationLink>
                            </PaginationItem>
                        )}

                        {page < totalPages - 1 && (
                            <>
                                {page < totalPages - 2 && (
                                    <PaginationItem>
                                    <PaginationEllipsis />
                                    </PaginationItem>
                                )}

                                <PaginationItem>
                                    <PaginationLink onClick={() => setPage(totalPages)}>
                                    {totalPages}
                                    </PaginationLink>
                                </PaginationItem>
                            </>
                        )}

                        <PaginationItem>
                            <PaginationNext
                            onClick={nextPage}
                            className={
                                page === totalPages
                                ? "pointer-events-none opacity-50"
                                : "cursor-pointer"
                            }
                            />
                        </PaginationItem>

                    </PaginationContent>
                </Pagination>
                </section>
        </main>
    )
}