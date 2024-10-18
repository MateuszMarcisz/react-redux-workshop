import {createSlice} from "@reduxjs/toolkit";


const ratingSlice = createSlice({
    name: 'ratings',
    initialState: {},
    reducers: {
        setRating: (state, action) => {
            const {movieId, rating} = action.payload;
            state[movieId] = rating;
        }
    }
});

export const {setRating} = ratingSlice.actions;

export default ratingSlice.reducer;