import { Movie } from "@/types/movie.type";
import { create } from "zustand";
import { useCurrentNetflix } from "./userNetflix.store";
import { toast } from "sonner";

interface FavoriteMoviesStore{
    moviesLoved: Movie[]
    loading: boolean

    addFavoriteMovie: ( movie: Movie ) => void
    deleteFavoriteMovie: (id: number) => void
    isFavorite: (id: number) => boolean
}

export const useFavoriteMoviesStore = create<FavoriteMoviesStore>((set, get)=>({
    moviesLoved: [],
    loading: false,

    // funcion para añadir una pelicula
    addFavoriteMovie: ( movie ) => {
        const { currentUser } = useCurrentNetflix.getState()

        if(!currentUser) return toast.error("Ningun usuario seleccionado")
   
        // si la pelicula esta en el array moviesLoved entonces mostramos un mesaje
        const exists = get().moviesLoved.some((m) => m.id === movie.id)
        if(exists) return toast.warning("La Pelicula ya esta en la lista")
        

        // actualizamos la estado de moviesLoved con la peliculas anteriores y agregamos la nueva pelicula
        set((state)=>({
            moviesLoved: [ ...state.moviesLoved, movie ]
        }))

        toast.success("Pelicula agregada con exito")
    },

    // funcion para eliminar una pelicula
    deleteFavoriteMovie: (id) => {
        // filtramos las peliculas y haci quitamos la pelicula con el id
        set((state) => ({
            moviesLoved: state.moviesLoved.filter((movie) => movie.id !== id)
        }))
    },


    isFavorite: (id) => {
        return get().moviesLoved.some((movie) => movie.id === id)
    }
}))
