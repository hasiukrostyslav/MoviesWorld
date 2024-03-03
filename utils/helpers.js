const convertGenres = (ids, genres) =>
  ids.map((id) => genres.find((genre) => genre.id === id).name);

module.exports = { convertGenres };
