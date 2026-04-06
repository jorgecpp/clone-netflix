import { Ranking } from "./(routes)/(home)/rankingMovies";
import { Navbar } from "@/components/shared/navBar";
import { SliderVideo } from "./(routes)/(home)/sliderVideo";
import { VideoBackground } from "@/app/(routes)/(home)/videoBackground";
import { ListMovies } from "./(routes)/(home)/listMovies";

import { Toaster } from "@/components/ui/sonner";

export default function Home() {
  return (
    <div>
      <div className="relative h-200 w-full overflow-hidden">
        <VideoBackground/>
        <Navbar></Navbar>
        <SliderVideo/>
        <div className="top-0 left-0 w-full h-full 
          bg-gradient-to-b
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
