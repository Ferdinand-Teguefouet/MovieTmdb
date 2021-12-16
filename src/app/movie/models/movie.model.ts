export interface Movie{
    id: number;
    original_title: string;
    overview: string;
    poster_path: string;
    page : number;
    total_pages: number;
    results : any[];
}

export interface MovieDetail{
    backdrop_path: string
    belongs_to_collection:string
    buget: number
    genres: Genres[]
    homepage: string
    original_language: string
    original_title: string
    overviex: string
    popularity: number
    production_companies: ProductionCompanies[]
    Production_countries: ProductionCountries[]
    release_date: string
    status: string
    vote_average: number
    vote_count: number
}

export interface Genres{
    name: string
}

export interface ProductionCompanies{
    logo_path: string
    name : string
    origin_country: string
}

export interface ProductionCountries{
    name: string
}