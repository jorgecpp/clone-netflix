import { GenreResponse, MoviesResponse, MovieVideoResponse, SeriesResponse } from "@/types/movie.type";

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

export async function getRankedDayMovies(limit = 5){
    const response = await fetch(
        'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
        options
    )

    const data: MoviesResponse = await response.json()
    
    return data.results.slice(0, limit)
}

export async function getMovieTrailer( movieId: number ) {
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`,
        options
    )

    const data: MovieVideoResponse = await response.json()
    return (data.results.find(
        video => 
            video.site === "YouTube" &&
            video.type === "Trailer"

        ) ?? null 
    );
}

export async function getMovieGenres() {
    const response = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list`,
        options
    )

    const data: GenreResponse = await response.json()

    return data.genres
}

export async function getSeries(){
    const response = await fetch(
        'https://api.themoviedb.org/3/discover/tv',
        options
    )
    const data: SeriesResponse = await response.json()

    return data.results
}

export async function searchSeries(query: string) {
    const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
        options
    )

    const data: SeriesResponse = await response.json()

    return data.results
}
