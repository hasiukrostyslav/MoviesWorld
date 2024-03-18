const { StatusCodes } = require('http-status-codes');
const axiosRequest = require('../utils/axiosInstance');
const { getMoviesData, randomSort } = require('../utils/helpers');
const { collectionsIDs } = require('../utils/constants');

const getCollection = async (ids, full = false) => {
  const requests = ids.flatMap((id) =>
    typeof id === 'number'
      ? axiosRequest.get(`/collection/${id}`)
      : id.map((el) => axiosRequest.get(`/movie/${el}`))
  );

  const response = await Promise.all(requests)
    .then((res1) => res1)
    .then((res2) =>
      Promise.all(
        res2.map((res) =>
          res.data.parts
            ? {
                id: res.data.id,
                collection: res.data.name,
                movies: res.data.parts.map((movie) => getMoviesData(movie)),
                backdropImg: res.data.parts.map((movie) => movie.backdrop_path),
              }
            : getMoviesData(res.data)
        )
      )
    );

  const collections = response.filter((el) => Object.hasOwn(el, 'collection'));
  const restMovies = response.filter((el) => !Object.hasOwn(el, 'collection'));

  const moviesRaw = randomSort(
    [...collections.flatMap((collect) => collect.movies), ...restMovies].filter(
      (movie) => movie.rating > 0
    )
  );

  const movies = full ? moviesRaw : moviesRaw.slice(0, 5);
  const wallpapers = collections.flatMap((collect) => collect.backdropImg);

  return {
    id: collections.map((collect) => collect.id),
    collections: collections.map((collect) => collect.collection),
    backdropImg: randomSort(wallpapers),
    movies,
  };
};

const getMoviesCollections = async (req, res, next) => {
  const HPCollection = await getCollection(collectionsIDs.HP);
  const LOTRCollection = await getCollection(collectionsIDs.LOTR);
  const MARVELCollection = await getCollection(collectionsIDs.MARVEL);
  const DCCollection = await getCollection(collectionsIDs.DC);
  const SWCollection = await getCollection(collectionsIDs.StarWars);
  const JB007Collection = await getCollection(collectionsIDs.JB007);

  res.status(StatusCodes.OK).json({
    status: 'success',
    data: {
      hp: HPCollection,
      lotr: LOTRCollection,
      marvel: MARVELCollection,
      dc: DCCollection,
      starWars: SWCollection,
      jb007: JB007Collection,
    },
  });
};

module.exports = { getMoviesCollections };
