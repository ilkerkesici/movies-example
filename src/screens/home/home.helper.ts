import { ApiHelper } from 'helpers';
import APIHelper from 'helpers/apiHelper';
import { changeTotalPage, changeRefreshing, changeMovies, changeCurrentPage, changeLoading } from 'store/movies/movies.actions';
import { IMovie } from 'types';

/**
 * Search movies from api
 * @param text is searched text
 */
export const search = async (text: string) => {
    try {
        changeRefreshing(true);
        let response;
        if (text.length === 0)
            response = await ApiHelper.getRequest('trending/movie/week');
        else
            response = await ApiHelper.getRequest('search/movie', `&query=${text}`);

        const { success, data } = response;
        if (success) {
            changeMovies(data.results);
            changeTotalPage(data.total_pages);
            changeCurrentPage(1);
        }
        changeRefreshing(false);
    } catch (err) {
        changeRefreshing(false);
    }
}

/**
 * Load more page from api
 * @param currentPage is current page
 * @param totalPage is total page for the searching data
 * @param searchedText text whic is searched
 * @param nextPage is loaded page
 * @param currentMovies current moovies
 */
export const loadMore = async (currentPage: number, totalPage: number, searchedText: string, nextPage: number, currentMovies: IMovie[]) => {
    if (currentPage === totalPage) return;
    let url = searchedText && searchedText.length > 0 ? 'search/movie' : 'trending/movie/week';
    let query = '';
    if (nextPage > 1) { // Load more
        changeLoading(true);
        query += `&page=${nextPage}`;
        if (searchedText.length > 0) query += `&query=${searchedText}`;
        const response = await APIHelper.getRequest(url, query);
        const { data, success } = response;
        if (success) {
            const movies = currentMovies;
            const newMovies = data.results;
            const all = movies.concat(newMovies);
            changeCurrentPage(nextPage);
            changeMovies(all);

        }
        changeLoading(false);
        return;
    }

}

/**
 * Refresh the movies page
 */
export const refreshMovies = async () => {
    changeRefreshing(true);
    const response = await ApiHelper.getRequest('trending/movie/week');
    const { data, success } = response;
    if (success) {
        changeCurrentPage(1);
        changeMovies(data.results);
    }
    changeRefreshing(false);
}

/**
 * Convert the movie genres to string
 * @param genres is genres ehich is stored on root state (from redux)
 * @param movieGenres is movie genres ids
 */
export const movieGenresToString = (genres: {[id: number]: string}, movieGenres: number[]): string => {
    let sGenres = '';
    for(let i = 0; i < movieGenres.length; i++){
        sGenres += genres[movieGenres[i]];
        if(i == 1) break;
        if(movieGenres.length !== i + 1) sGenres += '/';
    }
    return sGenres;
}