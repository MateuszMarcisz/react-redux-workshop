import './Rating.css';
import {useDispatch} from "react-redux";
import {setRating} from "../features/rating/ratingSlice.js";

const Rating = ({movieId}) => {

    const dispatch = useDispatch();

    const handleRatingChange = (e) => {
        const rating = e.target.value;
        dispatch(setRating({movieId, rating}));
    };

    return (
        <fieldset className="rating">
            <input type="radio" id={`star5-${movieId}`} name={`rating-${movieId}`} value="5"
                   onChange={handleRatingChange}/>
            <label className="full" htmlFor={`star5-${movieId}`} title="Awesome - 5 stars"></label>

            <input type="radio" id={`star4half-${movieId}`} name={`rating-${movieId}`} value="4.5"
                   onChange={handleRatingChange}/>
            <label className="half" htmlFor={`star4half-${movieId}`} title="Pretty good - 4.5 stars"></label>

            <input type="radio" id={`star4-${movieId}`} name={`rating-${movieId}`} value="4"
                   onChange={handleRatingChange}/>
            <label className="full" htmlFor={`star4-${movieId}`} title="Pretty good - 4 stars"></label>

            <input type="radio" id={`star3half-${movieId}`} name={`rating-${movieId}`} value="3.5"
                   onChange={handleRatingChange}/>
            <label className="half" htmlFor={`star3half-${movieId}`} title="Meh - 3.5 stars"></label>

            <input type="radio" id={`star3-${movieId}`} name={`rating-${movieId}`} value="3"
                   onChange={handleRatingChange}/>
            <label className="full" htmlFor={`star3-${movieId}`} title="Meh - 3 stars"></label>

            <input type="radio" id={`star2half-${movieId}`} name={`rating-${movieId}`} value="2.5"
                   onChange={handleRatingChange}/>
            <label className="half" htmlFor={`star2half-${movieId}`} title="Kinda bad - 2.5 stars"></label>

            <input type="radio" id={`star2-${movieId}`} name={`rating-${movieId}`} value="2"
                   onChange={handleRatingChange}/>
            <label className="full" htmlFor={`star2-${movieId}`} title="Kinda bad - 2 stars"></label>

            <input type="radio" id={`star1half-${movieId}`} name={`rating-${movieId}`} value="1.5"
                   onChange={handleRatingChange}/>
            <label className="half" htmlFor={`star1half-${movieId}`} title="Meh - 1.5 stars"></label>

            <input type="radio" id={`star1-${movieId}`} name={`rating-${movieId}`} value="1"
                   onChange={handleRatingChange}/>
            <label className="full" htmlFor={`star1-${movieId}`} title="Sucks big time - 1 star"></label>

            <input type="radio" id={`starhalf-${movieId}`} name={`rating-${movieId}`} value="0.5"
                   onChange={handleRatingChange}/>
            <label className="half" htmlFor={`starhalf-${movieId}`} title="Sucks big time - 0.5 stars"></label>
        </fieldset>
    )
};

export default Rating;
