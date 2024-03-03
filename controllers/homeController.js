const axios = require('axios').default;
const { StatusCodes } = require('http-status-codes');

const baseRequest = axios.create({
  baseURL: process.env.THIRD_API_URL,
  params: { api_key: process.env.THIRD_API_KEY },
});

const getTrendingList = async (req, res, next) => {
  const response = await baseRequest.get('/movie/now_playing');
  const data = response.data.results;

  const formatData = data.map((movie) => ({
    id: movie.id,
    title: movie.title,
    genres: movie.genre_ids,
    backdropPath: movie.backdrop_path,
    posterPath: movie.poster_path,
    overview: movie.overview,
  }));

  res
    .status(StatusCodes.OK)
    .json({ status: 'success', results: data.length, data: formatData });
};

module.exports = { getTrendingList };
