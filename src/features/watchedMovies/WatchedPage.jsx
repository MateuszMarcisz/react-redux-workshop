import MovieList from "../../components/MovieList.jsx";
import {useSelector} from "react-redux";
import {selectWatchedMovies} from "../../redux/selectors.js";

const WatchedPage = () => {
    const watchedMovies = useSelector(selectWatchedMovies);

    return (
        <div className='movie-container'>
            {watchedMovies.length > 0 ? (
                <>
                    <h2>Movies You have already watched</h2>
                    <MovieList movies={watchedMovies} showYear={true} showPoster={true} showToWatch={false}/>
                </>
            ) : (
                <h2>Looks like You haven't rated any movies yet!</h2>
            )}
        </div>
    );
};

export default WatchedPage;