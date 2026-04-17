"use client"
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { UserNetflix } from "@/generated/prisma/client";
import { useCurrentNetflix } from "@/hooks/use-current-user";
import { LogOut, Pencil, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export function SelectProfile(){
    const [profiles, setProfiles] = useState<UserNetflix[]>([]);
    const router = useRouter(); 
    const {userId, currentUser, changeCurrentUser} = useCurrentNetflix();
    const numberProfiles = profiles.length

    useEffect(()=>{
        if(!userId) return
        const fetchprofiles = async () => {
            try{
                const res = await axios.get(`/api/users/${userId}`);
                setProfiles(res.data)
            }catch(error){
                console.error(error)
            }
        }

        fetchprofiles();
    },[userId])

    return(
        <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        {
                            currentUser ? <img alt="user profile" className="cursor-pointer w-10 h-10 rounded-md" src={currentUser.avatarUrl}/> : <User className="cursor-pointer hover:text-gray-300 transition-all duration-300"/>
                        }
                    </DropdownMenuTrigger>

                    <DropdownMenuContent className="bg-black text-white border border-zinc-800 shadow-xl" align="start">
                        <DropdownMenuGroup>
                            <DropdownMenuLabel>Perfiles</DropdownMenuLabel>
                            {
                               profiles.map((profile) => (
                                    <DropdownMenuItem key={profile.id} onClick={()=>changeCurrentUser(profile)} className="w-15 h-15 cursor-pointer flex items-center gap-2 data-highlighted:bg-red-500 data-highlighted:text-white">
                                        <img alt="movie image" className="rounded-md"src={profile.avatarUrl}/>
                                        <p>{profile.profileName}</p>
                                    </DropdownMenuItem>
                               ))
                            }
                        </DropdownMenuGroup>

                        <DropdownMenuSeparator/>

                        <DropdownMenuGroup>
                            <DropdownMenuItem className="data-highlighted:bg-red-500 data-highlighted:text-white" onClick={()=>{
                                if(numberProfiles){
                                    router.push("/profile")
                                }else{
                                    router.push("/register")
                                }
                            }}>
                                <Pencil color="#ffff" className="w-4 h-4"/>
                                Administrar perfiles
                            </DropdownMenuItem>
                            
                            
                            {
                                numberProfiles > 0 && (
                                    <DropdownMenuItem className="data-highlighted:bg-red-500 data-highlighted:text-white" onClick={()=>{
                                        changeCurrentUser(null)
                                    }}>
                                        
                                        <LogOut color="#ffff" className="w-4 h-4"/>
                                        Cerrar Sesion
                                    </DropdownMenuItem>
                                )
                            }
                            
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
    )
}
