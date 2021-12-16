export interface Movie{
    id: number;
    original_title: string;
    poster_path: string;
    page : number;
    total_pages: number;
    results : any[];
}

export interface MovieDetail{
    backdrop_path: string
    budget: number
    genres: any[]
    homepage: string
    original_language: string
    original_title: string
    overview: string
    popularity: number
    production_companies: any[]
    production_countries: any[]
    release_date: string
    status: string
    vote_average: number
    vote_count: number
}
