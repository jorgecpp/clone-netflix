import { rankingMovies } from "@/data/rankingMovies";

export function Ranking(){
    return(
        <div>
            <ul className="flex gap-25 p-4 ">
                {
                    rankingMovies.map(movie=>(
                        <li className="flex w-50 items-center "><img src={movie.positionUrl}/><img src={movie.movieUrl}/></li>
                    ))
                }
            </ul>
        </div>
    )
}