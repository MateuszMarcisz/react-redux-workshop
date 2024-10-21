import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const apiKey = import.meta.env.VITE_API_KEY;

export const fetchIndividualMovie = createAsyncThunk(
    'individualMovie/fetchIndividualMovies',
    async (movieId) => {
        const response = await fetch(`https://www.omdbapi.com/?i=${movieId}&apikey=${apiKey}`);
        const data = await response.json();
        if (data.Response === 'True') {
            return {
                title: data.Title,
                year: data.Year,
                type: data.Type,
                plot: data.Plot,
                director: data.Director,
                actors: data.Actors,
                poster: data.Poster,
            };
        } else {
            return new Error(data.Error);
        }
    }
);


export const individualMovieSlice = createSlice({
    name: 'individualMovie',
    initialState: {
        movie: {},
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
            .addCase(fetchIndividualMovie.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchIndividualMovie.fulfilled, (state, action) => {
                state.isLoading = false;
                state.movie = action.payload;
            })
            .addCase(fetchIndividualMovie.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    },
});

export const {setLoading, setError} = individualMovieSlice.actions;
export default individualMovieSlice.reducer;