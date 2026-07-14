import { Navbar } from "@/components/shared/navBar"
import { MoviesClient } from "@/components/movies/MoviesClient"

export default function MoviesPage() {
    return (
        <>
            <Navbar />

            <MoviesClient/>
        </>
    )
}
