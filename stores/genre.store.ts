import { create } from "zustand";
import { getMovieGenres } from "@/services/tmdb.service";
import { Genre } from "@/types/movie.type";

interface GenreStore{
    genres: Genre[],
    loading: boolean,

    loadGenres: () => Promise<void>;
    getGenreName: ( id: number ) => string | undefined;
}

export const useGenreStore = create<GenreStore>((set, get)=>({
    genres: [],
    loading:false,
    loadGenres: async () => {

        //evitar volver a pedirlo si ya existen
        if (get().genres.length > 0) return;

        set( {loading: true} );

        try{
            const genres = await getMovieGenres();

            set({
                genres,
                loading: false,
            });

        }catch (error){
            console.error(error);
            set({ loading: false })
        }
    },

    getGenreName: (id) => {
        return get().genres.find((genre) => genre.id === id)?.name;
    }
    
}))
