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

const getCollectionData = async (id) => {
  if (!id) return null;

  const response = await axiosRequest.get(`/collection/${id}`);

  return response.data.parts.map((movie) => ({
    id: movie.id,
    posterPath: movie.poster_path,
    title: movie.title,
    year: movie.release_date,
    rating: +movie.vote_average.toFixed(1),
  }));
};

const getCast = async (id) => {
  if (!id) return null;

  const response = await axiosRequest.get(`/movie/${id}/credits`);

  return response.data.cast
    .filter((el) => el.profile_path && el.character)
    .map((actor) => ({
      id: actor.id,
      name: actor.name,
      imgPath: actor.profile_path,
    }));
};

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
  const { key } = req.params;
  const { page } = req.query;

  const { params } = searchCategoriesParams.find(
    (el) => el.key.toLowerCase() === key
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

const getMovie = async (req, res, next) => {
  const { id } = req.params;

  const response = await axiosRequest.get(`/movie/${id}`);
  const { data } = response;

  const collection = await getCollectionData(data.belongs_to_collection.id);
  const cast = await getCast(data.id);

  const movie = {
    id: data.id,
    title: data.title,
    status: data.status,
    releaseDate: data.release_date,
    overview: data.overview,
    backdropPath: data.backdrop_path,
    posterPath: data.poster_path,
    genres: data.genres.map((genre) => genre.name),
    rating: +data.vote_average.toFixed(1),
    runtime: data.runtime,
    budget: data.budget,
    revenue: data.revenue,
    languages: data.spoken_languages.map((language) => language.english_name),
    countries: data.production_countries.map((country) => country.name),
    collection,
    cast,
  };

  res.status(StatusCodes.OK).json({
    status: 'success',
    data: movie,
  });
};

module.exports = { getMovieListsByCategory, getMoviesList, getMovie };
