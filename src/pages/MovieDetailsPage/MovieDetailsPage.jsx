import { useEffect, useState, useRef, Suspense } from "react";
import { Link, Outlet, useParams, useLocation } from "react-router-dom";
import { getDetails } from "../../tmdb-api";
import Loader from "../../components/Loader/Loader";

import MovieInfo from "../../components/MovieInfo/MovieInfo";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoader, setIsLoader] = useState(false);
  const location = useLocation();
  const backLink = useRef(location.state ?? "/movies");

  useEffect(() => {
    async function openDetails() {
      try {
        setIsLoader(true);
        const data = await getDetails(movieId);
        setMovie(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoader(false);
      }
    }
    openDetails();
  }, [movieId]);
  return (
    <div>
      <p>
        <Link to={backLink.current}>Go back</Link>
      </p>
      {isLoader && <Loader />}
      {movie && <MovieInfo movie={movie} />}
      <div>
        <h2>Additional information</h2>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
