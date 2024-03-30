const { StatusCodes } = require('http-status-codes');
const axiosRequest = require('../utils/axiosInstance');
const {
  convertGenres,
  getMoviesData,
  getShowsData,
  getTrendingListOfItem,
} = require('../utils/helpers');

const convertResponseData = (data, category) => {
  switch (category) {
    case 'all': {
      return data.map((movie) => ({
        id: movie.id,
        title: movie.title || movie.name,
        overview: movie.overview,
        backdropPath: movie.backdrop_path,
        posterPath: movie.poster_path,
        genres: convertGenres(movie.genre_ids),
      }));
    }

    case 'person': {
      return data.map((person) => ({
        id: person.id,
        name: person.name,
        imgPath: person.profile_path,
      }));
    }

    default: {
      return data.map((movie) => ({
        id: movie.id,
        title: movie.title || movie.name,
        posterPath: movie.poster_path,
        year: new Date(
          movie.release_date || movie.first_air_date
        ).getFullYear(),
        rating: +movie.vote_average.toFixed(1),
      }));
    }
  }
};

const searchParams = [
  {
    pathId: 'all',
    key: 'Trending All',
  },
  {
    pathId: 'movie',
    key: 'Trending Movies',
  },
  {
    pathId: 'tv',
    key: 'Trending Shows',
  },
  {
    pathId: 'person',
    key: 'Trending Actors',
  },
];

const getHomePageData = async (req, res, next) => {
  const request = searchParams.map((param) =>
    axiosRequest.get(`/trending/${param.pathId}/week`)
  );

  const response = await Promise.all(request)
    .then((res1) => res1)
    .then((res2) => Promise.all(res2.map((el) => el.data.results)));

  const data = response.map((resData, index) => ({
    category: searchParams[index].key,
    data: convertResponseData(resData, searchParams[index].pathId),
  }));

  res.status(StatusCodes.OK).json({
    status: 'success',
    results: response.length,
    data,
  });
};

const getTrendingMovies = async (req, res, next) => {
  const { response, maxPage } = await getTrendingListOfItem(
    '/trending/movie/week',
    req
  );

  const data = response.data.results.map((movie) => getMoviesData(movie));

  res.status(StatusCodes.OK).json({
    status: 'success',
    page: response.data.page,
    totalPages: maxPage,
    results: data.length,
    data,
  });
};

const getTrendingShows = async (req, res, next) => {
  const { response, maxPage } = await getTrendingListOfItem(
    '/trending/tv/week',
    req
  );

  const data = response.data.results.map((show) => getShowsData(show));

  res.status(StatusCodes.OK).json({
    status: 'success',
    page: response.data.page,
    totalPages: maxPage,
    results: data.length,
    data,
  });
};

module.exports = { getHomePageData, getTrendingMovies, getTrendingShows };
