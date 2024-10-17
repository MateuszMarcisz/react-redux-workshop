import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const apiKey = import.meta.env.VITE_API_KEY;

// async thunk to fetch movies
export const fetchMovies = createAsyncThunk(
    'movies/fetchMovies',
    async (searchTerm) => {
        const response = await fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=${apiKey}`);
        const data = await response.json();
        if (data.Response === "True") {
            return data.Search.map((movie)=> ({
                title: movie.Title,
                year: movie.Year,
                // type: movie.Type,
                imdbID: movie.imdbID,
                poster: movie.Poster,
            }));
        } else {
            throw new Error(data.Error);
        }
    }
);

// slice for movies
export const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        movieList: [],
        isLoading: false,
        error: null,
    },
    reducers: {
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.isLoading = false;
                state.movieList = action.payload;
            })
            .addCase(fetchMovies.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    },
});

export const { setLoading, setError } = movieSlice.actions;
export default movieSlice.reducer;
