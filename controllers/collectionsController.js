const { StatusCodes } = require('http-status-codes');
const axiosRequest = require('../utils/axiosInstance');
const { collectionsIDs } = require('../utils/constants');
const {
  getMoviesData,
  randomSort,
  convertCollectionResponse,
  checkCollectionPoster,
} = require('../utils/helpers');

const getCollection = async (ids, key) => {
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
                img: {
                  posterImg: res.data.poster_path,
                  backdropImg: res.data.parts.map(
                    (movie) => movie.backdrop_path
                  ),
                },
              }
            : getMoviesData(res.data)
        )
      )
    );

  const { collections, movies, wallpapers, poster } =
    convertCollectionResponse(response);

  return {
    id: collections.map((collect) => collect.id),
    key,
    collections: collections.map((collect) => collect.collection),
    img: {
      posterImg: checkCollectionPoster(key, poster),
      backdropImg: randomSort(wallpapers).at(0),
    },
    backdropImg: randomSort(wallpapers).at(0),
    movies,
  };
};

const getMoviesCollections = async (req, res, next) => {
  const keys = collectionsIDs.flatMap((el) => Object.keys(el));

  const data = await Promise.all(
    keys.map((key) =>
      getCollection(collectionsIDs.find((el) => el[key])[key], key)
    )
  );

  res.status(StatusCodes.OK).json({
    status: 'success',
    results: data.length,
    data,
  });
};

module.exports = { getMoviesCollections };
