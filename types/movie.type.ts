export interface Movie{
    id:number,
    title: string,
    poster_path: string,
    backdrop_path: string,
    genre_ids: number[],
    vote_average: number,
    release_date: string
}

export interface MoviesResponse {
    page: number,
    results: Movie[],
    total_page: number,
    total_results: number
}

export interface MovieVideo {
    id: string,
    key: string,
    name: string,
    site: string,
    type: string,
    official: boolean
}
export interface MovieVideoResponse {
    id: number,
    results: MovieVideo[];
}

export interface Genre {
    id: number,
    name: string
}

export interface GenreResponse {
    genres: Genre[]
}
