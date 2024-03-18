const { StatusCodes } = require('http-status-codes');
const axiosRequest = require('../utils/axiosInstance');
const { getMoviesData } = require('../utils/helpers');
const { collectionsIDs } = require('../utils/constants');

const getCollection = async (ids) => {
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
                backdropImg: res.data.backdrop_path,
              }
            : getMoviesData(res.data)
        )
      )
    );

  const collections = response.filter((el) => Object.hasOwn(el, 'collection'));
  const restMovies = response.filter((el) => !Object.hasOwn(el, 'collection'));

  return {
    id: collections.map((collect) => collect.id),
    collections: collections.map((collect) => collect.collection),
    backdropImg: collections.map((collect) => collect.backdropImg),
    movies: [
      ...collections.flatMap((collect) => collect.movies),
      ...restMovies,
    ],
  };
};

const getMoviesCollections = async (req, res, next) => {
  const HPCollection = await getCollection(collectionsIDs.HP);
  const LORCollection = await getCollection(collectionsIDs.LOR);
  const MARVELCollection = await getCollection(collectionsIDs.MARVEL);
  const DCCollection = await getCollection(collectionsIDs.DC);
  const SWCollection = await getCollection(collectionsIDs.StarWars);
  const JSCollection = await getCollection(collectionsIDs.JS);

  res.status(StatusCodes.OK).json({
    status: 'success',
    data: {
      hp: HPCollection,
      lor: LORCollection,
      marvel: MARVELCollection,
      dc: DCCollection,
      starWars: SWCollection,
      js: JSCollection,
    },
  });
};

module.exports = { getMoviesCollections };
