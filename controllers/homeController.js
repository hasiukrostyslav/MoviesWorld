const { StatusCodes } = require('http-status-codes');
const axiosRequest = require('../utils/axiosInstance');

const genresTypes = require('../data/genresData.json');
const { convertGenres } = require('../utils/helpers');

const getTrendingList = async (req, res, next) => {
  const response = await axiosRequest.get('/movie/now_playing');
  const data = response.data.results;

  const genres = genresTypes.moviesGenres;

  const formatData = data.map((movie) => ({
    id: movie.id,
    title: movie.title,
    overview: movie.overview,
    backdropPath: movie.backdrop_path,
    posterPath: movie.poster_path,
    genres: convertGenres(movie.genre_ids, genres),
  }));

  res
    .status(StatusCodes.OK)
    .json({ status: 'success', results: data.length, data: formatData });
};

module.exports = { getTrendingList };
