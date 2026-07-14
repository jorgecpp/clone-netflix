import { Skeleton } from "../ui/skeleton";

export function MovieGridSkeleton(){
    return(
        <ul className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {Array.from({length: 10}).map((_, index)=>(
                <li key={index} className="flex flex-col items-center space-y-3">
                    <Skeleton className="w-75 h-112.5 rounded-lg"/>
                    <Skeleton className="h-5 w-40"/>
                </li>
            ))}
        </ul>
    )
}
