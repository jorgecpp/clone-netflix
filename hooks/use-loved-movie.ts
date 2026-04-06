import { Movie } from "@/generated/prisma/client";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { useCurrentNetflix } from "./use-current-user";
import { toast } from "sonner";

interface UseAddFilmMyList {
  lovedFilmsByUser: { [userId: string]: Movie[] }
  addLovedFile: (data: Movie) => void
  removeLovedItem: (data: Movie) => void
}

export const useLovedFilms = create(
  persist<UseAddFilmMyList>(
    (set, get) => ({
      lovedFilmsByUser: {},

      addLovedFile: (data: Movie) => {
        const { currentUser } = useCurrentNetflix.getState()

        if (!currentUser) {
          return toast.error("Ningún usuario seleccionado")
        }

        const currentLovedItems =
          get().lovedFilmsByUser[currentUser.id] || []

        const existingItem = currentLovedItems.find(
          (item) => item.id === data.id
        )

        if (existingItem) {
          return toast.warning("La película ya está en la lista")
        }

        set({
          lovedFilmsByUser: {
            ...get().lovedFilmsByUser,
            [currentUser.id]: [...currentLovedItems, data],
          },
        })

        toast.success("Película añadida a tu lista")
      },

      removeLovedItem: (data: Movie) => {
        const { currentUser } = useCurrentNetflix.getState()

        if (!currentUser){
            return toast.error("Ningún usuario selecionado")
        }

        const currentLovedItems =
          get().lovedFilmsByUser[currentUser.id] || []

        const updatedItems = currentLovedItems.filter(
          (item) => item.id !== data.id
        )

        set({
          lovedFilmsByUser: {
            ...get().lovedFilmsByUser,
            [currentUser.id]: updatedItems,
          },
        })

        toast.info("Película eliminada de tu lista")
      },
      
      
    }),
    {
      name: "loved-films-storage",
      storage: createJSONStorage(()=>localStorage)
    }
  )
)
