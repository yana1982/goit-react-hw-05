import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieReviews } from "../../tmdb-api";

export default function MovieReviews() {
  const { movieId } = useParams();
  const [reviewsMovie, setReviewsMovie] = useState([]);

  useEffect(() => {
    const getMoviesReviews = async () => {
      try {
        const data = await getMovieReviews(movieId);
        setReviewsMovie(data);
      } catch (error) {
        console.log(error);
      }
    };
    getMoviesReviews();
  }, [movieId]);
  return (
    <div>
      <ul>
        {reviewsMovie.length > 0 ? (
          reviewsMovie.map((rev) => (
            <li key={rev.id}>
              <h3>{rev.author}</h3>
              <p>{rev.content}</p>
            </li>
          ))
        ) : (
          <li>
            <p>There are no reviews</p>
          </li>
        )}
      </ul>
    </div>
  );
}
