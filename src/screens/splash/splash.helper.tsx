import { ApiHelper } from 'helpers';
import { changeGenres, changeMovies, changeTotalPage } from 'store/movies/movies.actions';

/**
 * Initialize app configuraiton
 * Redirect required screen
 */
export const initialize = async (redirect: () => void) => {
    await fetchInitialMovies();
    await getGentres();
    setTimeout(() => {
        redirect();
    }, 1500);
}

/**
 * Fetch the movies from API
 * Then set the categories on store
 */
const fetchInitialMovies = async (): Promise<boolean> => {
    try {
        const response = await ApiHelper.getRequest('trending/movie/week');
        const { data, success } = response;
        if (success) {
            changeTotalPage(data.total_pages);
            changeMovies(data.results);
        }
        return false;
    } catch (error) {
        return false;
    }
}

/**
 * Fetch the movies from API
 * Then set the categories on store
 */
const getGentres = async (): Promise<boolean> => {
    try {
        const response = await ApiHelper.getRequest('genre/movie/list');
        const { data, success } = response;
        if (success) {
            const genresAsDict = convertGenresToDict(data.genres);
            changeGenres(genresAsDict);
        }
        return false;
    } catch (error) {
        return false;
    }
}

type Genre = {
    id: number,
    name: string
}

/**
 * Convert the given genres to dictionary and return it for easy usage
 */
const convertGenresToDict = (genres: Genre[]) => {
    const genresDict: {[id: string] : string} = {};
    genres.forEach(element => {
        genresDict[element.id.toString()] = element.name;
    });
    return genresDict;
}

