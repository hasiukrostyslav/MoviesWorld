const genresTypes = require('../data/genresData.json');
const axiosRequest = require('./axiosInstance');

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

const getMaxPage = async (path) => {
  const response = await axiosRequest.get(path, {
    params: { page: 100 },
  });

  const { data } = response;

  return data.results.length ? 100 : data.total_pages;
};

module.exports = {
  convertGenres,
  getMoviesData,
  getShowsData,
  randomSort,
  convertCollectionResponse,
  getMaxPage,
};
