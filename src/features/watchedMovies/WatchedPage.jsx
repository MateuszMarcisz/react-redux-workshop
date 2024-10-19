import MovieList from "../../components/MovieList.jsx";
import {useSelector} from "react-redux";

const WatchedPage = () => {
    const ratedMovies = useSelector((state) => state.ratings);
    const watchedMovies = Object.values(ratedMovies);

    return (
        <div>
            <h2>Movies You have already watched</h2>
            <MovieList movies={watchedMovies} showYear={true} showPoster={true} showToWatch={false}/>
        </div>
    );
};

export default WatchedPage;