import { Ranking } from "@/components/home/rankingMovies/RankingMovies";
import { Navbar } from "@/components/shared/navBar";
import { SliderVideo } from "@/components/home/sliderVideo/SliderVideo";
import { VideoBackground } from "@/components/home/videoBackground/VideoBackground";
import { ListMovies } from "@/components/shared/listMovies/ListMovies";

import { Toaster } from "@/components/ui/sonner";

export default function Home() {
  return (
    <div>
      <div className="relative h-200 w-full overflow-hidden">
        <VideoBackground/>
        <Navbar></Navbar>
        <SliderVideo/>
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
