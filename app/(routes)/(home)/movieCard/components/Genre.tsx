
type Props = {
    genre: String[]
}

export function Genre({genre}:Props){
    return(
        <div className="flex gap-3 ">
            {
                genre.map(gen=>(
                    <div key={gen} className="text-white text-xl">{gen}</div>
                ))
            }
        </div>
    )
}