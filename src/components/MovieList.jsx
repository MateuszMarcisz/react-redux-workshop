import {Row, Col} from 'react-bootstrap';
import Rating from "./Rating.jsx";
import WatchListCheckbox from "./WatchListCheckbox.jsx";
import {Link} from "react-router-dom";

const MovieList = ({movies = [], showYear = false, showPoster = false, showRating = true, showToWatch = true}) => {
    return (<>
        <Row>
            {movies.map((movie) => (
                <Col xs={12} sm={6} md={4} lg={3} key={movie.imdbID} className="mb-4">
                    <div className="movie-card text-center">
                        <Link to={`/movie/${movie.imdbID}`} className="text-decoration-none">
                            {showPoster && <img src={movie.poster} alt={movie.title} className="img-fluid"/>}
                            <h3>{movie.title} {showYear && `(${movie.year})`}</h3>
                        </Link>
                        {showRating && (
                            <div className="rating-container">
                                <Rating movie={movie}/>
                            </div>
                        )}
                        {showToWatch && <WatchListCheckbox movie={movie}/>}
                    </div>

                </Col>
            ))}
        </Row>
    </>)
};

export default MovieList;
