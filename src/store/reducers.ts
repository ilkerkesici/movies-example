import { combineReducers } from "redux";
import MoviesReducer from './movies/movies.reducer';

export default combineReducers({
    MoviesResponse: MoviesReducer,
});
