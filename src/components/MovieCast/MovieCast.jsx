import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieCast } from "../../tmdb-api";

export default function MovieCast() {
  const { movieId } = useParams();
  const [movieCasts, setMovieCasts] = useState([]);

  useEffect(() => {
    const getCast = async () => {
      try {
        const data = await getMovieCast(movieId);
        setMovieCasts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getCast();
  }, [movieId]);
  return (
    <ul>
      {movieCasts.length > 0 &&
        movieCasts.map((cast) => (
          <li key={cast.id}>
            <img
              src={
                (!cast.profile_path && "../../../img/movie.jpg") ||
                `https://image.tmdb.org/t/p/w200${cast.profile_path}`
              }
              alt={cast.name}
            />
            <h3>{cast.name}</h3>
            <p>{cast.character}</p>
          </li>
        ))}
    </ul>
  );
}
