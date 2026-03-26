"use client"

import { Button } from "@/components/ui/button"
import axios from "axios"
import { AddProfile } from "../AddProfile"
import { useEffect, useState } from "react"
import { Trash2 } from "lucide-react"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

export function Profiles(){
    
    const [profiles, setProfiles] = useState([]);
    const [manageProfile, setManageProfile] = useState(false);
    const [deleteProfile, setDeleteProfile] = useState(false);
    const [selectedUser, setSelectedUser] = useState<string | null>(null);

    useEffect(()=>{
    
        const fetchUsers = async () => {
            try{
                const res = await axios.get('/api/users');
                setProfiles(res.data)
            }catch(error){
                console.error("error fetching users", error)
            }
        }
        fetchUsers();
        

    },[])

    const handleDelete = async ()=>{
        if(!selectedUser) return;

        try{
            await axios.delete(`/api/users/${selectedUser}`);

            setProfiles(prev => prev.filter((u:any) => u.id !== selectedUser));

            setDeleteProfile(false);
            setSelectedUser(null);
            
        }catch(error){
            console.error("Error al eliminar usuario", error)
        }
    }

    return(
        <>
            <ul className="flex gap-5 items-center justify-center">
                {
                    profiles.map(( profile:any )=>(
                        <li className="relative flex flex-col gap-3 items-center justify-center transition duration-300 " key={profile.id}>
                            <img src={profile.avatarUrl} className={`${manageProfile ? 'blur-md opacity-80': ''} w-20 h-20 rounded-full hover:border-2 hover:border-white transition duration-300`}/>
                            
                            <p className="text-zinc-400 uppercase">{profile.profileName}</p>

                            {manageProfile && (
                                <div className="absolute top-14 w-full flex gap-4 justify-center z-20">
                                    <Trash2 onClick={()=>{
                                            setDeleteProfile(true)
                                            setSelectedUser(profile.id)
                                        }} 
                                        className="text-white w-8 h-8 cursor-pointer hover:scale-110 transition"/>
                                </div>
                            )}
                        </li>
                    ))
                }

                <li>
                    <AddProfile/>
                </li>
            </ul>
            

            {deleteProfile && (            
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 transition-all duration-300">
                    <Alert className="w-auto h-auto flex flex-col items-center justify-center gap-5 bg-black ">
                        <AlertTitle className="text-2xl text-white">Alerta!</AlertTitle>
                        <AlertDescription className="text-white">
                            ¿Estas seguro que quieres eliminar este usuario?
                        </AlertDescription>
                        
                        <div className="flex gap-3 ">
                            <Button size={"lg"} className="p-5 bg-red-500 cursor-pointer" onClick={handleDelete}>
                                Eliminar
                            </Button>

                            <Button size={"lg"} className="p-5 cursor-pointer" onClick={()=>{setDeleteProfile(!deleteProfile)}}>
                                Cancelar
                            </Button>
                        </div>

                    </Alert>
                </div>
            )}


            <div>
                <Button onClick={()=>{setManageProfile(!manageProfile)}} className="border-2 rounded-sm p-2 text-zinc-400 mt-10 cursor-pointer">
                    Administrar Perfiles
                </Button>
            </div>
        </>
    )
}
