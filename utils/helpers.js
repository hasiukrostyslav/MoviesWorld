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

module.exports = { convertGenres, getMoviesData, randomSort };
