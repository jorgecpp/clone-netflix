import { Serie } from "@/types/movie.type"
import { SeriesCard } from "./SeriesCard";

type SeriesGridProps = {
    series: Serie[]
}

export function SeriesGrid({series}: SeriesGridProps){
    return(
        <ul className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 items-center justify-center">
            {
                series.map(serie => (
                    <SeriesCard key={serie.id} serie={serie}/>
                ))
            }
        </ul>
    )
}
