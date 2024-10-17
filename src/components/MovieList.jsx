// const MovieList = ({movies = [], showYear = false, showPoster = false}) => (
//     <div>
//         <h2>Movies:</h2>
//         <div className="movie-list">
//             {movies.map((movie) => (
//                 <div className="movie-item" key={movie.imdbID}>
//                     {showPoster && <img src={movie.poster} alt={movie.title}/>}
//                     <h3>
//                         {movie.title} {showYear && `(${movie.year})`}
//                     </h3>
//                 </div>
//             ))}
//         </div>
//     </div>
// );
//
// export default MovieList;

import {Row, Col } from 'react-bootstrap';

const MovieList = ({ movies = [], showYear = false, showPoster = false }) => (
    <>
        <h2>Movies:</h2>
        <Row>
            {movies.map((movie) => (
                <Col xs={12} sm={6} md={4} lg={3} key={movie.imdbID} className="mb-4">
                    <div className="movie-card text-center">
                        {showPoster && <img src={movie.poster} alt={movie.title} className="img-fluid" />}
                        <h3>
                            {movie.title} {showYear && `(${movie.year})`}
                        </h3>
                    </div>
                </Col>
            ))}
        </Row>
    </>
);

export default MovieList;
