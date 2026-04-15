import { Ranking } from "@/components/home/rankingMovies/RankingMovies";
import { Navbar } from "@/components/shared/navBar";
import {Info, Play} from 'lucide-react'
import { VideoBackground } from "@/components/home/videoBackground/VideoBackground";
import { ListMovies } from "@/components/shared/listMovies/ListMovies";

import { Toaster } from "@/components/ui/sonner";

export default function Home() {
  return (
    <div>
      <div className="relative h-200 w-full overflow-hidden">
        <VideoBackground/>
        <Navbar></Navbar>
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
                    <Play className='fill-black'/>
                    <span className='text-black'>Reproducir</span>
                </button>

                <button className='bg-zinc-400 flex items-center p-3 gap-2 rounded-sm'>
                    <Info/>
                    <span>Más Informacion</span>
                </button>
            </div>
        </div>
        <div className="top-0 left-0 w-full h-full 
          bg-linear-to-b
          from-black/0 
          via-black/50 
          to-[#171717]">
        </div>
      </div>

      <div>
        <Ranking/>
      </div>

      <div className="mt-10">
        <ListMovies/>
      </div>

      <Toaster/>
    </div>
  );
}
