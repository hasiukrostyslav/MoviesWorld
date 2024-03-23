const { StatusCodes } = require('http-status-codes');
const axiosRequest = require('../utils/axiosInstance');
const { getMoviesData, getShowsData } = require('../utils/helpers');

const searchCategoriesParams = [
  {
    key: 'Trending Cartoons',
    path: 'movie',
    params: {
      with_genres: 16,

      sort_by: 'popularity.desc',
      page: 1,
    },
  },
  {
    key: 'Popular Cartoons',
    path: 'movie',
    params: {
      with_genres: 16,
      sort_by: 'vote_count.desc',
      page: 1,
    },
  },
  {
    key: 'Top Rated Cartoons',
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
    key: 'Highest Grossing Cartoons',
    path: 'movie',
    params: {
      with_genres: 16,
      sort_by: 'revenue.desc',
      page: 1,
    },
  },
  {
    key: 'Trending Series',
    path: 'tv',
    params: {
      with_genres: 16,
      with_original_language: 'en',
      page: 1,
      sort_by: 'popularity.desc',
    },
  },
  {
    key: 'Popular Series',
    path: 'tv',
    params: {
      with_genres: 16,
      with_original_language: 'en',
      page: 1,
      sort_by: 'vote_count.desc',
    },
  },
  {
    key: 'Top Rated Series',
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
