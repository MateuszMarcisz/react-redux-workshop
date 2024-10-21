import {useSelector} from "react-redux";
import MovieList from "../../components/MovieList.jsx";

const ToWatchPage = () => {
    const toWatchMovies = useSelector((state) => state.toWatchMovies);
    console.log(toWatchMovies);
    return (
        <div>
            <h2>Movies You would love to watch!</h2>
            <MovieList movies={toWatchMovies} showYear={true} showPoster={true} showToWatch={false} />
        </div>
    );
};

export default ToWatchPage;