import {combineReducers, configureStore} from "@reduxjs/toolkit";
import movieReducer from '../features/movie/movieSlice.js';
import ratingReducer from '../features/rating/ratingSlice.js';
import toWatchMoviesReducer from '../features/toWatchMovies/toWatchMoviesSlice.js';
import individualMovieReducer from "../features/individualMovie/individualMovieSlice.js";
import persistReducer from "redux-persist/es/persistReducer";
import storage from 'redux-persist/lib/storage';
import {persistStore} from "redux-persist";

// standard root reducer
const rootReducer = combineReducers({
    movies: movieReducer,
    ratings: ratingReducer,
    toWatchMovies: toWatchMoviesReducer,
    individualMovie: individualMovieReducer,
});


// persistence configuration using redux-persist
const persistConfig = {
    key: 'root',
    storage,  // local storage
    whitelist: ['ratings', 'toWatchMovies'],
};

// applies persistence to rootReducer (only to ones in whitelist)
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
});


export const persistor = persistStore(store);
export default store;