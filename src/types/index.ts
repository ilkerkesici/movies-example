export interface IMovie {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    media_type: string,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}

export interface IMovieDetail extends IMovie {
    runtime: number | null | undefined,
    spoken_languages: {name: string}[]
}   

export enum EHomeStatus {
    ROW,
    COLUMN
}

export interface ICast {
    cast_id: number,
    character: string,
    id: number,
    name: string,
    profile_path: string | null | undefined
}

export interface ICrew {
    credit_id: number,
    department: string,
    id: number,
    job: string,
    name: string,
    profile_path: string | null | undefined
}

export interface ICreditResponse {
    cast: ICast[],
    crew: ICrew[]
}
