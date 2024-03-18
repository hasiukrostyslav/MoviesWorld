const { StatusCodes } = require('http-status-codes');
const axiosRequest = require('../utils/axiosInstance');
const { getMoviesData } = require('../utils/helpers');

const getNewMovies = async () => {
  const response = await axiosRequest.get('/discover/movie', {
    params: {
      primary_release_year: new Date().getFullYear(),
      'vote_count.gte': 50,
      sort_by: 'primary_release_date.desc',
      page: 1,
    },
  });

  const data = response.data.results;

  return data.map((movie) => getMoviesData(movie));
};

const getPopularNowMovies = async () => {
  const response = await axiosRequest.get('/discover/movie', {
    params: {
      sort_by: 'popularity.desc',
      page: 1,
    },
  });

  const data = response.data.results;

  return data.map((movie) => getMoviesData(movie));
};

const getPopularAllMovies = async () => {
  const response = await axiosRequest.get('/discover/movie', {
    params: {
      sort_by: 'vote_count.desc',
      page: 1,
    },
  });

  const data = response.data.results;

  return data.map((movie) => getMoviesData(movie));
};

const getTopRatingMovies = async () => {
  const response = await axiosRequest.get('/discover/movie', {
    params: {
      'vote_count.gte': 1000,
      sort_by: 'vote_average.desc',
      with_original_language: 'en',
      page: 1,
    },
  });

  const data = response.data.results;

  return data.map((movie) => getMoviesData(movie));
};

const getTopBoxOfficeMovies = async () => {
  const response = await axiosRequest.get('/discover/movie', {
    params: {
      sort_by: 'revenue.desc',
      page: 1,
    },
  });

  const data = response.data.results;

  return data.map((movie) => getMoviesData(movie));
};

const getAllMovies = async (req, res, next) => {
  const newMovies = await getNewMovies();
  const popularNowMovies = await getPopularNowMovies();
  const popularAllMovies = await getPopularAllMovies();
  const topRatingMovies = await getTopRatingMovies();
  const topBoxOfficeMovies = await getTopBoxOfficeMovies();

  res.status(StatusCodes.OK).json({
    status: 'success',
    data: {
      newMovies: newMovies.slice(0, 10),
      popularNowMovies: popularNowMovies.slice(0, 10),
      popularAllMovies: popularAllMovies.slice(0, 10),
      topRatingMovies: topRatingMovies.slice(0, 10),
      topBoxOfficeMovies: topBoxOfficeMovies.slice(0, 10),
    },
  });
};

module.exports = { getAllMovies };
