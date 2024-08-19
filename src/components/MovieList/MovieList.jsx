import { Link, useLocation } from "react-router-dom";

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={location}>
            <div>
              <img
                src={
                  (!movie.poster_path && "../../../img/movie.jpg") ||
                  `https://image.tmdb.org/t/p/w500${movie.poster_path}
  `
                }
                alt={`poster ${movie.title}`}
              />
              <p>{movie.original_title}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
