const { StatusCodes } = require('http-status-codes');
const axiosRequest = require('../utils/axiosInstance');
const { getMoviesData } = require('../utils/helpers');

const getNewMovies = async () => {
  const response = await axiosRequest.get('/discover/movie', {
    params: {
      primary_release_year: new Date().getFullYear(),
      'vote_count.gte': 50,
      sort_by: 'primary_release_date.desc',
    },
  });

  const data = response.data.results;

  return data.slice(0, 10).map((movie) => getMoviesData(movie));
};

const getPopularNowMovies = async () => {
  const response = await axiosRequest.get('/discover/movie', {
    params: {
      sort_by: 'popularity.desc',
    },
  });

  const data = response.data.results;

  return data.slice(0, 10).map((movie) => getMoviesData(movie));
};

const getPopularAllMovies = async () => {
  const response = await axiosRequest.get('/discover/movie', {
    params: {
      sort_by: 'vote_count.desc',
    },
  });

  const data = response.data.results;

  return data.slice(0, 10).map((movie) => getMoviesData(movie));
};

const getTopRatingMovies = async () => {
  const response = await axiosRequest.get('/discover/movie', {
    params: {
      'vote_count.gte': 1000,
      sort_by: 'vote_average.desc',
    },
  });

  const data = response.data.results;

  return data.slice(0, 10).map((movie) => getMoviesData(movie));
};

const getTopBoxOfficeMovies = async () => {
  const response = await axiosRequest.get('/discover/movie', {
    params: {
      sort_by: 'revenue.desc',
    },
  });

  const data = response.data.results;

  return data.slice(0, 10).map((movie) => getMoviesData(movie));
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
      newMovies,
      popularNowMovies,
      popularAllMovies,
      topRatingMovies,
      topBoxOfficeMovies,
    },
  });
};

module.exports = { getAllMovies };
