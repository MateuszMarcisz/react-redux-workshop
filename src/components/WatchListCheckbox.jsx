import {useDispatch, useSelector} from "react-redux";
import {addToWatchList, removeFromWatchList} from "../features/toWatchMovies/toWatchMoviesSlice.js";
import {selectIsMovieInWatchlist} from "../redux/selectors.js";


const WatchListCheckbox = ({movie}) => {
    const dispatch = useDispatch();
    const isChecked = useSelector((state) => selectIsMovieInWatchlist(state, movie.imdbID));


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
                checked={isChecked}
                onChange={handleChange}
            />
            <label htmlFor={`watchlist-${movie.imdbID}`}>Add to Watchlist</label>
        </div>
    )
};

export default WatchListCheckbox;