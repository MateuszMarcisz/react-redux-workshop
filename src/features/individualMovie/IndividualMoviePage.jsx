import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchIndividualMovie} from "./individualMovieSlice.js";
import {Col, Row} from "react-bootstrap";
import Rating from "../../components/Rating.jsx";


const IndividualMoviePage = () => {
    const {id} = useParams();
    const dispatch = useDispatch();

    const {movie, isLoading, error} = useSelector((state) => state.individualMovie);

    useEffect(() => {
        if (id) {
            dispatch(fetchIndividualMovie(id));
        }
    }, [dispatch, id]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="individual-movie-page">
            <Row>
                <h2 style={{marginTop: "1rem"}}>{movie.title}</h2>
            </Row>
            <Row>
                <div style={{textAlign: 'left', width: '100%', marginBottom: "1rem"}}>
                    <Rating movie={movie}/>
                </div>
            </Row>
            <Row>
                <Col md={4} className="text-left">
                    <img
                        src={movie.poster}
                        alt={movie.title}
                        className="img-fluid mb-3"
                        style={{height: '500px', objectFit: 'cover'}}
                    />
                </Col>

                <Col md={8} className="d-flex align-items-start">
                    <div className="flex-grow-1">
                        <p><strong>Year:</strong> {movie.year}</p>
                        <p><strong>Type:</strong> {movie.type}</p>
                        <p><strong>Director:</strong> {movie.director}</p>
                        <p><strong>Actors:</strong> {movie.actors}</p>
                        <p><strong>Plot:</strong> {movie.plot}</p>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default IndividualMoviePage;