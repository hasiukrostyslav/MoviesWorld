const { StatusCodes } = require('http-status-codes');
const axiosRequest = require('../utils/axiosInstance');
const { getShowsData } = require('../utils/helpers');

const searchCategoriesParams = [
  {
    key: 'New',
    params: {
      with_original_language: 'en',
      page: 1,
      'vote_count.gte': 50,
      first_air_date_year: new Date().getFullYear(),
    },
  },
  {
    key: 'Trending',
    params: {
      with_original_language: 'en',
      page: 1,
      sort_by: 'popularity.desc',
    },
  },
  {
    key: 'Popular',
    params: {
      with_original_language: 'en',
      page: 1,
      sort_by: 'vote_count.desc',
    },
  },
  {
    key: 'Top Rated',
    params: {
      with_original_language: 'en',
      page: 1,
      sort_by: 'vote_average.desc',
      'vote_count.gte': 1000,
    },
  },
];

const getShowsByCategory = async (req, res, next) => {
  const request = searchCategoriesParams.map((category) =>
    axiosRequest.get('/discover/tv', { params: category.params })
  );

  const response = await Promise.all(request)
    .then((res1) => res1)
    .then((res2) => Promise.all(res2.map((el) => el.data.results)));

  const data = response.map((resData, index) => ({
    category: searchCategoriesParams[index].key,
    data: resData.map((movie) => getShowsData(movie)).slice(0, 10),
  }));

  res.status(StatusCodes.OK).json({
    status: 'success',
    results: response.length,
    data: data,
  });
};

module.exports = { getShowsByCategory };
