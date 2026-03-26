import { Ranking } from "@/components/Ranking";
import { Navbar } from "@/components/shared/navBar";
import { SliderVideo } from "@/components/SliderVideo";

export default function Home() {
  return (
    <>
      <div className="relative h-200 w-full overflow-hidden">
        <video autoPlay loop muted playsInline className="
          absolute top-0 left-0 w-full h-full object-cover -z-10">
          <source src="/videos/video-1.mp4" type="video/mp4"/>
        </video>
        
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
    </>
  );
}
