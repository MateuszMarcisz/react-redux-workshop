import {configureStore} from "@reduxjs/toolkit";
import movieReducer from '../features/movie/movieSlice.js';
import ratingReducer from '../features/rating/ratingSlice.js';
import toWatchMoviesReducer from '../features/toWatchMovies/toWatchMoviesSlice.js';


const store = configureStore({
    reducer: {
        movies: movieReducer,
        ratings: ratingReducer,
        toWatchMovies: toWatchMoviesReducer,
    },
});


export default store;