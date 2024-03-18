const genresTypes = require('../data/genresData.json');

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

module.exports = {
  convertGenres,
  getMoviesData,
  randomSort,
  convertCollectionResponse,
};
