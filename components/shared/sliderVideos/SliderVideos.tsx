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
            <h2 className='text-white text-3xl font-semibold '>
                AmidaDev
            </h2>
            <p className='text-white max-w-150'>
               Disfruta de las mejores películas y series en un solo lugar. 
                Historias que te atraparán, emociones que no olvidarás.
                Tu próxima aventura comienza aquí.
            </p>

            <div className='flex gap-2'>
                <button className='bg-white flex items-center p-3 gap-2 rounded-sm'>
                    <Play className='fill-black' onClick={()=>router.push(`/watch/${id}`)}/>
                    <span className='text-black'>Reproducir</span>
                </button>

                <button className='bg-zinc-400 flex items-center p-3 gap-2 rounded-sm'>
                    <Info/>
                    <span>Más Informacion</span>
                </button>
            </div>
        </div>
    )
}