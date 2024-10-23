import {useSelector} from "react-redux";
import MovieList from "../../components/MovieList.jsx";

const ToWatchPage = () => {
    const toWatchMovies = useSelector((state) => state.toWatchMovies);

    return (
        <div>
            {toWatchMovies.length > 0 ? (
                <div className='movie-container'>
                    <h2>Movies You would love to watch!</h2>
                    <MovieList movies={toWatchMovies} showYear={true} showPoster={true} showToWatch={false}/>
                </div>
            ) : (
                <h2>Looks like You haven't added any movies to the watch list</h2>
            )}
        </div>
    );
};

export default ToWatchPage;