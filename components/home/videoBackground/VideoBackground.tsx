export function VideoBackground(){
    return(
        <video autoPlay loop muted playsInline className="
        absolute top-0 left-0 w-full h-full object-cover -z-10">
            <source src="/videos/video-1.mp4" type="video/mp4"/>
        </video>
    )
}
