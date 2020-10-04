import { IMovie } from 'types';
import { store } from '../';
import { GENRES_ON_CHANGE, LOADING_CHANGE, MOVIES_CHANGE, PAGE_CHANGED, REFRESHING_CHANGE, TOTAL_PAGE_CHANGED } from './types';

/**
 * Change movies from store
 * @param movies is movie list
 */
export const changeMovies = (movies: IMovie[]) => {
    const dispatch = store.dispatch;
    dispatch({ type: MOVIES_CHANGE, payload: movies });
}

/**
 * Change loading status
 * @param loading is loading state for home screen
 */
export const changeLoading = (loading: boolean) => {
    const dispatch = store.dispatch;
    dispatch({ type: LOADING_CHANGE, payload: loading });
}

/**
 * Change refres status
 * @param refreshing is refresh state for home screen
 */
export const changeRefreshing = (refreshing: boolean) => {
    const dispatch = store.dispatch;
    dispatch({ type: REFRESHING_CHANGE, payload: refreshing });
}

/**
 * Change the total page from redux
 * @param totalPage is total page numner from API
 */
export const changeTotalPage = (totalPage: number) => {
    const dispatch = store.dispatch;
    dispatch({ type: TOTAL_PAGE_CHANGED, payload: totalPage });
}

/**
 * Change the current page number
 * @param newPageNumber new page number for fetch data
 */
export const changeCurrentPage = (newPageNumber: number) => {
    const dispatch = store.dispatch;
    dispatch({ type: PAGE_CHANGED, payload: newPageNumber });
}

/**
 * Change genres from state (call for starting the app)
 * @param genres changes dictionary
 */
export const changeGenres = (genres: {[id: number]: string}) => {
    const dispatch = store.dispatch;
    dispatch({ type: GENRES_ON_CHANGE, payload: genres });
}