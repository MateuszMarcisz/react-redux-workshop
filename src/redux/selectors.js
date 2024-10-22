export const selectIsMovieInWatchlist = (state, imdbID) =>
    state.toWatchMovies.some(movie => movie.imdbID === imdbID);

export const selectCurrentRating = (state, imdbID) => {
    return state.ratings[imdbID]?.rating || 0;
};

export const selectWatchedMovies = (state) => {
    const ratedMovies = state.ratings;
    return Object.values(ratedMovies);
};