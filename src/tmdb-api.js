import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.baseURL = "https://api.themoviedb.org/3";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZWRlNmRmNmQyYTk3NTZlMmJjMTA1NWM0NWM2N2Y3YiIsIm5iZiI6MTcyNDA2NTAzMC4wMzA4MDMsInN1YiI6IjY2YmEyYmVmNGFiNDQyMDJmMGI3NjNhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5i_eTTYF1ykChtupBSJt1bGjtNacKTV-uQJaRnwOkt8",
  },
};
export const getTrendMovies = async () => {
  const response = await axios.get("/trending/movie/day", options);
  return response.data;
};

export const getSearchMovies = async (query) => {
  const response = await axios.get("/search/movie", {
    params: {
      query: query,
    },
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZWRlNmRmNmQyYTk3NTZlMmJjMTA1NWM0NWM2N2Y3YiIsIm5iZiI6MTcyNDA2NTAzMC4wMzA4MDMsInN1YiI6IjY2YmEyYmVmNGFiNDQyMDJmMGI3NjNhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5i_eTTYF1ykChtupBSJt1bGjtNacKTV-uQJaRnwOkt8",
    },
  });
  return response.data.results;
};
export const getDetails = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}`, options);
  return response.data;
};

export const getMovieCast = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/credits`, options);
  return response.data.cast;
};

export const getMovieReviews = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/reviews`, options);
  return response.data.results;
};
