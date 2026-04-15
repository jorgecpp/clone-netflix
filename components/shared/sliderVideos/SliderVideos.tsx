"use client"
import { useRouter } from "next/navigation";
import {Info, Play} from 'lucide-react'

type sliderVideos = {
    id: string
}

export function SliderVideos({id}: sliderVideos){
    const router = useRouter()


    return(
        <div className='flex flex-col p-4 gap-4 absolute bottom-20'>
            <div className='flex gap-2'>
                <button className='bg-white flex items-center p-3 gap-2 rounded-sm' onClick={()=>router.push(`/watch/${id}`)}>
                    <Play className='fill-black'/>
                    <span className='text-black'>Reproducir</span>
                </button>
            </div>
            
            <p className='text-white max-w-150'>
               Disfruta de las mejores películas y series en un solo lugar. 
                Historias que te atraparán, emociones que no olvidarás.
                Tu próxima aventura comienza aquí.
            </p>

        </div>
    )
}