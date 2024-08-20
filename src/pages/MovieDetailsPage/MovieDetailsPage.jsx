import { useEffect, useState, useRef, Suspense } from "react";
import { Link, Outlet, useParams, useLocation } from "react-router-dom";
import { getDetails } from "../../tmdb-api";
import Loader from "../../components/Loader/Loader";
import MovieInfo from "../../components/MovieInfo/MovieInfo";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import css from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoader, setIsLoader] = useState(false);
  const [isError, setIsError] = useState(false);
  const location = useLocation();
  const backLink = useRef(location.state ?? "/movies");

  useEffect(() => {
    async function openDetails() {
      try {
        setIsError(false);
        setIsLoader(true);
        const data = await getDetails(movieId);
        setMovie(data);
      } catch (error) {
        setIsError(true);
        console.log(error);
      } finally {
        setIsLoader(false);
      }
    }
    openDetails();
  }, [movieId]);
  return (
    <div className={css.movieContainer}>
      <p>
        <Link to={backLink.current} className={css.goBackBtn}>
          Go back
        </Link>
      </p>
      {isError && <ErrorMessage />}
      {isLoader && <Loader />}
      {movie && <MovieInfo movie={movie} />}
      <div className={css.detailsContainer}>
        <h2 className={css.title}>Additional information</h2>
        <ul>
          <li className={css.itemLink}>
            <Link to="cast">Cast</Link>
          </li>
          <li className={css.itemLink}>
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
