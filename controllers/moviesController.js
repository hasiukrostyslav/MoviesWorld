const { StatusCodes } = require('http-status-codes');
const axiosRequest = require('../utils/axiosInstance');
const { getMoviesData } = require('../utils/helpers');

const searchCategoriesParams = [
  {
    key: 'New',
    params: {
      primary_release_year: new Date().getFullYear(),
      'vote_count.gte': 50,
      sort_by: 'primary_release_date.desc',
      page: 1,
    },
  },
  {
    key: 'Trending',
    params: {
      sort_by: 'popularity.desc',
      page: 1,
    },
  },
  {
    key: 'Popular',
    params: {
      sort_by: 'vote_count.desc',
      page: 1,
    },
  },
  {
    key: 'Top Rated',
    params: {
      'vote_count.gte': 1000,
      sort_by: 'vote_average.desc',
      with_original_language: 'en',
      page: 1,
    },
  },
  {
    key: 'Highest Grossing',
    params: {
      sort_by: 'revenue.desc',
      page: 1,
    },
  },
];

const getMoviesByCategory = async (req, res, next) => {
  const request = searchCategoriesParams.map((category) =>
    axiosRequest.get('/discover/movie', { params: category.params })
  );

  const response = await Promise.all(request)
    .then((res1) => res1)
    .then((res2) => Promise.all(res2.map((el) => el.data.results)));

  const data = response.map((resData, index) => ({
    category: searchCategoriesParams[index].key,
    data: resData.map((movie) => getMoviesData(movie)),
  }));

  res.status(StatusCodes.OK).json({
    status: 'success',
    results: response.length,
    data: data,
  });
};

module.exports = { getMoviesByCategory };
