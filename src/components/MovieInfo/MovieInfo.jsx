import css from "./MovieInfo.module.css";

const MovieInfo = ({ movie }) => {
  const genres = movie.genres;
  return (
    <div className={css.movieDetailsContainer}>
      <div className={css.imgContainer}>
        {movie.poster_path ? (
          <img
            className={css.img}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}
  `}
            alt={`poster ${movie.title}`}
          />
        ) : (
          <div>{movie.title}</div>
        )}
      </div>
      <div className={css.detailsContainer}>
        <h1>
          {movie.original_title} ({movie.release_date})
        </h1>
        <p>User Score: {movie.vote_average}</p>
        <h2>Overview</h2>
        <p>{movie.overview}</p>
        <h2>Genres</h2>
        <ul>
          {genres.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieInfo;
