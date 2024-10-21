import {useDispatch, useSelector} from "react-redux";
import {addToWatchList, removeFromWatchList} from "../features/toWatchMovies/toWatchMoviesSlice.js";
import {useEffect} from "react";


const WatchListCheckbox = ({movie}) => {
    const dispatch = useDispatch();
    const moviesToWatch = useSelector((state) => state.toWatchMovies);
    const isChecked = moviesToWatch.some(m => m.imdbID === movie.imdbID);


    const handleChange = (e) => {
        if (e.target.checked) {
            dispatch(addToWatchList(movie));
        } else {
            dispatch(removeFromWatchList(movie.imdbID));
        }
    }

    return (
        <div>
            <input
                type='checkbox'
                id={`watchlist-${movie.imdbID}`}
                check={isChecked}
                onChange={handleChange}
            />
            <label htmlFor={`watchlist-${movie.imdbID}`}>Add to Watchlist</label>
        </div>
    )
};

export default WatchListCheckbox;