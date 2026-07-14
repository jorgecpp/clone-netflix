export interface Movie{
    id:number,
    title: string,
    poster_path: string,
    vote_average: number,
    release_date: string
}

export interface MoviesResponse {
    page:number,
    results: Movie[],
    total_page: number,
    total_results: number
}
