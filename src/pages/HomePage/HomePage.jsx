import { useState, useEffect } from "react";
import { getTrendMovies } from "../../tmdb-api";

import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoader, setIsLoader] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchTrendMovies() {
      try {
        setIsLoader(true);
        setIsError(false);
        const data = await getTrendMovies();
        setMovies(data.results);
      } catch {
        setIsError(true);
        console.log(error);
      } finally {
        setIsLoader(false);
      }
    }
    fetchTrendMovies();
  }, []);
  return (
    <div>
      {isError && <ErrorMessage />}
      <h2>Trending movies</h2>
      {isLoader && <Loader />}
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
