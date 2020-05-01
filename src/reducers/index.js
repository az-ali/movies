import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import moviesDetailReducer from './moviesDetailReducer';

export default combineReducers({ 
    movies: moviesReducer,
    movieDetail: moviesDetailReducer
});