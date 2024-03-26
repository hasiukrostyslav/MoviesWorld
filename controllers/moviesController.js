const { StatusCodes } = require('http-status-codes');
const axiosRequest = require('../utils/axiosInstance');
const { getMoviesData, getMaxPage } = require('../utils/helpers');
const { NotFoundError } = require('../errors');

const searchCategoriesParams = [
  {
    key: 'New',
    params: {
      primary_release_year: new Date().getFullYear(),
      'vote_count.gte': 50,
      sort_by: 'primary_release_date.desc',
    },
  },
  {
    key: 'Trending',
    params: {
      sort_by: 'popularity.desc',
    },
  },
  {
    key: 'Popular',
    params: {
      sort_by: 'vote_count.desc',
    },
  },
  {
    key: 'Top Rated',
    params: {
      'vote_count.gte': 1000,
      sort_by: 'vote_average.desc',
      with_original_language: 'en',
    },
  },
  {
    key: 'Highest Grossing',
    params: {
      sort_by: 'revenue.desc',
    },
  },
];

const getMovieListsByCategory = async (req, res, next) => {
  const request = searchCategoriesParams.map((category) =>
    axiosRequest.get('/discover/movie', { params: category.params })
  );

  const response = await Promise.all(request)
    .then((res1) => res1)
    .then((res2) => Promise.all(res2.map((el) => el.data.results)));

  const data = response.map((resData, index) => ({
    category: searchCategoriesParams[index].key,
    data: resData.map((movie) => getMoviesData(movie)).slice(0, 10),
  }));

  res.status(StatusCodes.OK).json({
    status: 'success',
    results: response.length,
    data: data,
  });
};

const getMoviesList = async (req, res, next) => {
  const path = '/discover/movie';
  const { id } = req.params;
  const { page } = req.query;

  const { params } = searchCategoriesParams.find(
    (el) => el.key.toLowerCase() === id
  );

  const maxPage = await getMaxPage(path, { ...params, page: page || 1 });

  if (page > maxPage)
    throw new NotFoundError(
      `Invalid page: Pages start at 1 and max at ${maxPage}.`
    );

  const response = await axiosRequest.get(path, {
    params: { ...params, page: page || 1 },
  });

  const data = response.data.results.map((movie) => getMoviesData(movie));

  res.status(StatusCodes.OK).json({
    status: 'success',
    page: response.data.page,
    maxPage,
    results: data.length,
    data,
  });
};

module.exports = { getMovieListsByCategory, getMoviesList };
