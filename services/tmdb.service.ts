import { MoviesResponse } from "@/types/movie.type";

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_TOKEN}`
    }
};

export async function getPopularMovies(){
    const response = await fetch(
        'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', 
        options
    )

    const data: MoviesResponse = await response.json()

    return data.results
}

export async function searchMovies( query: string ) {
    const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
        options
    )
    
    const data: MoviesResponse = await response.json()

    return data.results
}



