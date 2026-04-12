
type Props = {
    genre: string[]
}

export function Genre({genre}:Props){
    return(
        <div className="flex gap-3 ">
            {
                genre.map((gen,index)=>(
                    <div key={index} className="text-white text-xl">{gen}</div>
                ))
            }
        </div>
    )
}