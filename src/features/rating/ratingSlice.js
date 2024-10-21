import {createSlice} from "@reduxjs/toolkit";


const ratingSlice = createSlice({
    name: 'ratings',
    initialState: {},
    reducers: {
        setRating: (state, action) => {
            const {rating, movie} = action.payload;
            state[movie.imdbID] = {...movie, rating};
        }
    }
});

export const {setRating} = ratingSlice.actions;

export default ratingSlice.reducer;