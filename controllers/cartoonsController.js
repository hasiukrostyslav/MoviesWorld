const { StatusCodes } = require('http-status-codes');
const axiosRequest = require('../utils/axiosInstance');
const { getMoviesData, getShowsData } = require('../utils/helpers');

const searchCategoriesParams = [
  {
    key: 'New Cartoons',
    path: 'movie',
    params: {
      with_genres: 16,
      primary_release_year: new Date().getFullYear(),
      'vote_count.gte': 50,
      sort_by: 'primary_release_date.desc',
      page: 1,
    },
  },
  {
    key: 'Popular',
    path: 'movie',
    params: {
      with_genres: 16,
      sort_by: 'vote_count.desc',
      page: 1,
    },
  },
  {
    key: 'Top Rated',
    path: 'movie',
    params: {
      with_genres: 16,
      'vote_count.gte': 1000,
      sort_by: 'vote_average.desc',
      with_original_language: 'en',
      page: 1,
    },
  },
  {
    key: 'Highest Grossing',
    path: 'movie',
    params: {
      with_genres: 16,
      sort_by: 'revenue.desc',
      page: 1,
    },
  },
  {
    key: 'New',
    path: 'tv',
    params: {
      with_genres: 16,
      with_original_language: 'en',
      page: 1,
      'vote_count.gte': 50,
      first_air_date_year: new Date().getFullYear(),
    },
  },
  {
    key: 'Popular',
    path: 'tv',
    params: {
      with_genres: 16,
      with_original_language: 'en',
      page: 1,
      sort_by: 'vote_count.desc',
    },
  },
  {
    key: 'Top Rated',
    path: 'tv',
    params: {
      with_genres: 16,
      with_original_language: 'en',
      page: 1,
      sort_by: 'vote_average.desc',
      'vote_count.gte': 1000,
    },
  },
];

const getCartoonsByCategory = async (req, res, next) => {
  const request = searchCategoriesParams.map((category) =>
    axiosRequest.get(`/discover/${category.path}`, { params: category.params })
  );

  const response = await Promise.all(request)
    .then((res1) => res1)
    .then((res2) => Promise.all(res2.map((el) => el.data.results)));

  const data = response.map((resData, index) => ({
    category: searchCategoriesParams[index].key,
    data: resData
      .map((movie) =>
        searchCategoriesParams[index].path === 'movie'
          ? getMoviesData(movie)
          : getShowsData(movie)
      )
      .slice(0, 10),
  }));

  res.status(StatusCodes.OK).json({
    status: 'success',
    results: response.length,
    data,
  });
};

module.exports = { getCartoonsByCategory };
