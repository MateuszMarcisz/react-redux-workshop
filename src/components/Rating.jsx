import './Rating.css';
import {useDispatch, useSelector} from "react-redux";
import {setRating} from "../features/rating/ratingSlice.js";

const Rating = ({ movie }) => {
    const dispatch = useDispatch();
    const movieRatings = useSelector((state) => state.ratings);

    const currentRating = movieRatings[movie.imdbID]?.rating || 0;

    const handleRatingChange = (e) => {
        const rating = e.target.value;
        dispatch(setRating({ movie, rating }));
    };

    return (
        <fieldset className="rating">
            <input
                type="radio"
                id={`star5-${movie.imdbID}`}
                name={`rating-${movie.imdbID}`}
                value="5"
                onChange={handleRatingChange}
                checked={currentRating === "5"}
            />
            <label className="full" htmlFor={`star5-${movie.imdbID}`} title="Awesome - 5 stars"></label>

            <input
                type="radio"
                id={`star4half-${movie.imdbID}`}
                name={`rating-${movie.imdbID}`}
                value="4.5"
                onChange={handleRatingChange}
                checked={currentRating === "4.5"}
            />
            <label className="half" htmlFor={`star4half-${movie.imdbID}`} title="Pretty good - 4.5 stars"></label>

            <input
                type="radio"
                id={`star4-${movie.imdbID}`}
                name={`rating-${movie.imdbID}`}
                value="4"
                onChange={handleRatingChange}
                checked={currentRating === "4"}
            />
            <label className="full" htmlFor={`star4-${movie.imdbID}`} title="Pretty good - 4 stars"></label>

            <input
                type="radio"
                id={`star3half-${movie.imdbID}`}
                name={`rating-${movie.imdbID}`}
                value="3.5"
                onChange={handleRatingChange}
                checked={currentRating === "3.5"}
            />
            <label className="half" htmlFor={`star3half-${movie.imdbID}`} title="Meh - 3.5 stars"></label>

            <input
                type="radio"
                id={`star3-${movie.imdbID}`}
                name={`rating-${movie.imdbID}`}
                value="3"
                onChange={handleRatingChange}
                checked={currentRating === "3"}
            />
            <label className="full" htmlFor={`star3-${movie.imdbID}`} title="Meh - 3 stars"></label>

            <input
                type="radio"
                id={`star2half-${movie.imdbID}`}
                name={`rating-${movie.imdbID}`}
                value="2.5"
                onChange={handleRatingChange}
                checked={currentRating === "2.5"}
            />
            <label className="half" htmlFor={`star2half-${movie.imdbID}`} title="Kinda bad - 2.5 stars"></label>

            <input
                type="radio"
                id={`star2-${movie.imdbID}`}
                name={`rating-${movie.imdbID}`}
                value="2"
                onChange={handleRatingChange}
                checked={currentRating === "2"}
            />
            <label className="full" htmlFor={`star2-${movie.imdbID}`} title="Kinda bad - 2 stars"></label>

            <input
                type="radio"
                id={`star1half-${movie.imdbID}`}
                name={`rating-${movie.imdbID}`}
                value="1.5"
                onChange={handleRatingChange}
                checked={currentRating === "1.5"}
            />
            <label className="half" htmlFor={`star1half-${movie.imdbID}`} title="Meh - 1.5 stars"></label>

            <input
                type="radio"
                id={`star1-${movie.imdbID}`}
                name={`rating-${movie.imdbID}`}
                value="1"
                onChange={handleRatingChange}
                checked={currentRating === "1"}
            />
            <label className="full" htmlFor={`star1-${movie.imdbID}`} title="Sucks big time - 1 star"></label>

            <input
                type="radio"
                id={`starhalf-${movie.imdbID}`}
                name={`rating-${movie.imdbID}`}
                value="0.5"
                onChange={handleRatingChange}
                checked={currentRating === "0.5"}
            />
            <label className="half" htmlFor={`starhalf-${movie.imdbID}`} title="Sucks big time - 0.5 stars"></label>
        </fieldset>
    );
};

export default Rating;
