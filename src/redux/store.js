import {configureStore} from "@reduxjs/toolkit";
import movieReducer from '../features/movie/movieSlice.js';


const store = configureStore({
    reducer: {
        movies: movieReducer,
    },
});


export default store;