import { Button } from "@/components/ui/button";
import axios from "axios";
import { Upload } from "lucide-react";
import { dataMovies } from "./NormalMovies.data";


export  function NormalMovies(){

    const clickLodingMovie = async () => {
        try{
            for(const movie of dataMovies){
                await axios.post("/api/movies/normalMovies", movie)
            }

        }catch(error){
            console.error(error)
        }
    }

    return(
        <div className="flex flex-col border-2 rounded-md p-4 gap-2">
            <h1>Cargar Peliculas Normales</h1>

            <Button className="border-2 hover:bg-red-500" onClick={clickLodingMovie}>
                subir pelicular
                <Upload/>
            </Button>
        </div>
    )
}
