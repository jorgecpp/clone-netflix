"use client"
import { Logo } from "@/components/shared/logo";
import { NormalMovies } from "./components/normalMovies";
import { PopularMovies } from "./components/popularMovies";

export default function LoadingMovies(){
    return(
        <div className="flex flex-col items-center justify-center gap-5 min-h-screen">
            <Logo/>
            <h1 className="text-2xl">Carga tus Peliculas favoritas 😎</h1>
            <div className="flex gap-10">
                <NormalMovies/>
                <PopularMovies/>
            </div>
        </div>
    )
}
