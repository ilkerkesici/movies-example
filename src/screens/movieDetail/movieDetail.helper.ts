import { ApiHelper } from 'helpers';
import { ICreditResponse, IMovieDetail } from 'types';

/**
 * Get the details of movie
 * @param movieID movie id
 */
export const getMovieDetail = async (movieID: number): Promise<IMovieDetail | null> => {
    const response = await ApiHelper.getRequest(`movie/${movieID}`);
    const { success, data } = response;
    if(success) return data;
    return null
}

/**
 * Get the crew and cast personals of the movie
 * @param movieID movie id
 */
export const getCredits = async (movieID: number): Promise<ICreditResponse | null> => {
    const response = await ApiHelper.getRequest(`movie/${movieID}/credits`);
    const { success, data } = response;
    if(success) return data;
    return null
}