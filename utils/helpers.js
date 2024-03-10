const genresTypes = require('../data/genresData.json');

const convertGenres = (ids) =>
  ids.map(
    (id) =>
      [...genresTypes.moviesGenres, ...genresTypes.showsGenres].find(
        (genre) => genre.id === id
      ).name
  );

module.exports = { convertGenres };
