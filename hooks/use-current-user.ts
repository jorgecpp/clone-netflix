import { UserNetflix } from "@/generated/prisma/client";
import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"
interface UseCurrentUser {
    currentUser: UserNetflix | null
    changeCurrentUser: (data: UserNetflix | null ) => void
}

export const useCurrentNetflix = create(
    persist<UseCurrentUser>(
        (set) => ({
            currentUser: null,
            changeCurrentUser: (data:UserNetflix | null) => {
                set({currentUser: data})
            }
        }),
        {
            name:"current-netflix-user",
            storage: createJSONStorage(()=>sessionStorage)
        }
    )
)