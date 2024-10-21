import {createSlice} from "@reduxjs/toolkit";

const toWatchMoviesSlice = createSlice({
    name: 'toWatchMovies',
    initialState: [],
    reducers: {
        addToWatchList: (state, action) => {
            const movie = action.payload;
            const exists = state.find((m) => m.imdbID === movie.imdbID);
            if (!exists) {
                state.push(movie);
            }
        },
        removeFromWatchList: (state, action) => {
            const movieId = action.payload;
            return state.filter((m) => m.imdbID !== movieId);
        },
    },
});

export const {addToWatchList, removeFromWatchList } = toWatchMoviesSlice.actions;

export default toWatchMoviesSlice.reducer;