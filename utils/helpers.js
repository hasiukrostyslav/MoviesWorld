const axiosRequest = require('./axiosInstance');
const genresTypes = require('../data/genresData.json');
const { NotFoundError } = require('../errors');
const { uniquePoster } = require('./constants');

const convertGenres = (ids) =>
  ids.map(
    (id) =>
      [...genresTypes.moviesGenres, ...genresTypes.showsGenres].find(
        (genre) => genre.id === id
      ).name
  );

const getMoviesData = (movie) => ({
  id: movie.id,
  title: movie.title,
  posterPath: movie.poster_path,
  year: new Date(movie.release_date).getFullYear(),
  rating: +movie.vote_average.toFixed(1),
});

const getShowsData = (show) => ({
  id: show.id,
  title: show.name,
  posterPath: show.poster_path,
  year: new Date(show.first_air_date).getFullYear(),
  rating: +show.vote_average.toFixed(1),
});

const randomSort = (arr) =>
  arr
    .filter((value) => value)
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

const convertCollectionResponse = (res, full) => {
  const collections = res.filter((el) => Object.hasOwn(el, 'collection'));
  const restMovies = res.filter((el) => !Object.hasOwn(el, 'collection'));

  const moviesRaw = randomSort(
    [...collections.flatMap((collect) => collect.movies), ...restMovies].filter(
      (movie) => movie.rating > 0
    )
  );

  const movies = full ? moviesRaw : moviesRaw.slice(0, 5);
  const wallpapers = collections.flatMap((collect) => collect.img.backdropImg);
  const poster = collections.map((collect) => collect.img.posterImg);

  return { collections, movies, wallpapers, poster };
};

const checkCollectionPoster = (key, poster) => {
  if (uniquePoster.find((title) => title === key)) {
    if (key === 'marvel') {
      return poster.at(3);
    }
    return poster.at(-2);
  }

  return poster.at(0);
};

const getMaxPage = async (path, params) => {
  const response = await axiosRequest.get(path, {
    params: { ...params, page: 100 },
  });

  const { data } = response;

  return data.results.length ? 100 : data.total_pages;
};

const getListOfItems = async (path, req, searchParams) => {
  const { key } = req.params;
  const { page } = req.query;

  const param = searchParams.find(
    (el) => el.key.toLowerCase() === key.toLowerCase().replaceAll('-', ' ')
  )?.params;

  if (!param)
    throw new NotFoundError(`Invalid category: Can't find category "${key}".`);

  const maxPage = await getMaxPage(path, {
    ...param,
    page: page || 1,
  });

  if (page > maxPage)
    throw new NotFoundError(
      `Invalid page: Pages start at 1 and max at ${maxPage}.`
    );

  const response = await axiosRequest.get(path, {
    params: { ...param, page: page || 1 },
  });

  return { response, maxPage };
};

const getCast = async (type, id) => {
  if (!id) return null;

  const response = await axiosRequest.get(`/${type}/${id}/credits`);

  return response.data.cast
    .filter((el) => el.profile_path && el.character)
    .map((actor) => ({
      id: actor.id,
      name: actor.name,
      imgPath: actor.profile_path,
    }));
};

module.exports = {
  convertGenres,
  getMoviesData,
  getShowsData,
  randomSort,
  checkCollectionPoster,
  convertCollectionResponse,
  getMaxPage,
  getListOfItems,
  getCast,
};
