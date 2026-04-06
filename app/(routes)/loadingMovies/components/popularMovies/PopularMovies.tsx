import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { trendingMovies } from "./PopularMovies.data";
import axios from "axios";

export function PopularMovies(){

    const loadingPopularMovies = async () => {
        try{
            for(const pMovies of trendingMovies){
                await axios.post("/api/movies/popularMovies", pMovies)
            }

        }catch(error){
            console.error(error)
        }
    }

    return(
        <div className="flex flex-col border-2 rounded-md p-4 gap-2">
            <h1>Cargar Peliculas Populares</h1>
            
            <Button className="border-2 hover:bg-blue-300" onClick={loadingPopularMovies}>
                Subir Peliculas
                <Upload/>
            </Button>
        </div>
    )
}
