import { IMovie } from "types";
import {
    MOVIES_CHANGE,
    LOADING_CHANGE,
    TOTAL_PAGE_CHANGED,
    PAGE_CHANGED,
    REFRESHING_CHANGE,
    GENRES_ON_CHANGE
} from "./types";

interface IInitialState {
    loading: boolean,
    movies: IMovie[],
    page: number,
    totalPage: number,
    refreshing: boolean,
    genres: { [id: string]: string }
}

const INITIAL_STATE: IInitialState = {
    loading: false,
    movies: [],
    page: 1,
    totalPage: 1,
    refreshing: false,
    genres: {}
};

export default (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case PAGE_CHANGED:
            return { ...state, page: action.payload };
        case LOADING_CHANGE:
            return { ...state, loading: action.payload };
        case MOVIES_CHANGE:
            return { ...state, movies: action.payload };
        case TOTAL_PAGE_CHANGED:
            return { ...state, totalPage: action.payload };
        case REFRESHING_CHANGE:
            return { ...state, refreshing: action.payload };
        case GENRES_ON_CHANGE:
            return { ...state, genres: action.payload };
        default:
            return state;
    }
};