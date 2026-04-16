import { UserNetflix } from "@/generated/prisma/client";
import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

interface UseCurrentUser {
    userId: string | null
    currentUser: UserNetflix | null
    isHydrated: boolean,

    setHydrated: () => void
    changeCurrentUser: (data: UserNetflix | null ) => void
    setUser: (profile: UserNetflix | null, userId: string) => void
}

export const useCurrentNetflix = create(
    persist<UseCurrentUser>(
        (set) => ({
            userId: null,
            currentUser: null,
            isHydrated: false,

            setHydrated: () => set({isHydrated: true}),

            changeCurrentUser: (data: UserNetflix | null) => {
                set({currentUser: data})
            },
                
            setUser: (profile, userId) => {
                set({
                    currentUser: profile,
                    userId: userId
                })
            }
        }),
        {
            name:"current-netflix-user",
            storage: createJSONStorage(()=>sessionStorage),
            onRehydrateStorage: () => (state) => {
                if(state){
                    state.setHydrated()
                }
            }
        }
    )
)