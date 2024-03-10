const { StatusCodes } = require('http-status-codes');
const axiosRequest = require('../utils/axiosInstance');

const { convertGenres } = require('../utils/helpers');

const getTrendingAll = async () => {
  const response = await axiosRequest.get('/trending/all/week');
  const data = response.data.results;

  return data.map((movie) => ({
    id: movie.id,
    title: movie.title || movie.name,
    overview: movie.overview,
    backdropPath: movie.backdrop_path,
    posterPath: movie.poster_path,
    genres: convertGenres(movie.genre_ids),
  }));
};

const getTrendingMovies = async () => {
  const response = await axiosRequest.get('/trending/movie/week');
  const data = response.data.results;

  return data.map((movie) => ({
    id: movie.id,
    title: movie.title,
    posterPath: movie.poster_path,
    year: new Date(movie.release_date).getFullYear(),
    rating: +movie.vote_average.toFixed(1),
  }));
};

const getTrendingShows = async () => {
  const response = await axiosRequest.get('/trending/tv/week');
  const data = response.data.results;

  return data.map((show) => ({
    id: show.id,
    title: show.name,
    posterPath: show.poster_path,
    year: new Date(show.first_air_date).getFullYear(),
    rating: +show.vote_average.toFixed(1),
  }));
};

const getPopularActors = async () => {
  const response = await axiosRequest.get('person/popular');
  const data = response.data.results;

  return data.map((person) => ({
    id: person.id,
    name: person.name,
    imgPath: person.profile_path,
  }));
};

const getTrendingLists = async (req, res, next) => {
  const trendingAll = await getTrendingAll();
  const trendingMovies = await getTrendingMovies();
  const trendingShows = await getTrendingShows();
  const popularActors = await getPopularActors();

  res.status(StatusCodes.OK).json({
    status: 'success',
    data: {
      trendingAll: {
        results: trendingAll.length,
        data: trendingAll,
      },
      trendingMovies: {
        results: trendingMovies.length,
        data: trendingMovies,
      },
      trendingShows: {
        results: trendingShows.length,
        data: trendingShows,
      },
      popularActors: {
        results: popularActors.length,
        data: popularActors,
      },
    },
  });
};

module.exports = { getTrendingLists };
