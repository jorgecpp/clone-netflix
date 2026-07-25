"use client"
import { MovieGridSkeleton } from "@/components/movies/MovieGridSkeleton";
import { SeriesGrid } from "@/components/series/SeriesGrid";
import { Navbar } from "@/components/shared/navBar";
import { PaginationMedia } from "@/components/shared/pagination/PaginationMedia";
import { Input } from "@/components/ui/input";
import { useTmdbSeries } from "@/hooks/useTmdbSeries";


export default function SeriesPage(){
    const { loading, series, search, setSearch, page, setPage, totalPages, previousPage, nextPage } = useTmdbSeries()

    return(
        <>
            <Navbar/>
            <main className="flex flex-col mx-auto max-w-7xl">
                
                <section className="flex flex-col items-center justify-center gap-4">
                    <h2 className="text-4xl">Series</h2>
                    <p className="text-muted-foreground">Discoverd Series</p>
                </section>

                <section className="mb-10 flex justify-center">
                    <Input 
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}
                    placeholder="Search series..." 
                    className="w-100"/>
                </section>
                
                <section className="w-full">
                    {loading ? (
                        <MovieGridSkeleton/>
                    ): (
                        <SeriesGrid series={series}/>
                    )}
                </section>
                
                <PaginationMedia
                page={page}
                nextPage={nextPage}
                previousPage={previousPage}
                totalPages={totalPages}
                setPage={setPage}
                />
            </main>
        </>
    )
}
