import {Button} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {fetchMovies} from "../movie/movieSlice.js";
import {useState} from "react";
import MovieList from "../../components/MovieList.jsx";

const SearchPage = () => {
    const dispatch = useDispatch();
    const {movieList, isLoading, error} = useSelector((state) => state.movies);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(fetchMovies(searchTerm));
        setSearchTerm('');
    };

    return (
        <div className='movie-container'>
            <div>
                <form onSubmit={handleSearch}>
                    <input
                        type='text'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search movie by the name"
                    />
                    <Button
                        type='submit'
                        variant="primary">
                        Search Movies
                    </Button>
                </form>
            </div>
            <div>
                {isLoading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>}
                {movieList.length > 0 && <MovieList movies={movieList} showPoster={true} showYear={true} />}
            </div>
        </div>
    );
};

export default SearchPage;