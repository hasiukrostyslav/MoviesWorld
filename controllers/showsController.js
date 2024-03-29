const { StatusCodes } = require('http-status-codes');
const axiosRequest = require('../utils/axiosInstance');
const { showSearchParams } = require('../utils/constants');
const { getShowsData, getListOfItems, getCast } = require('../utils/helpers');

const getShowListsByCategory = async (req, res, next) => {
  const request = showSearchParams.map((category) =>
    axiosRequest.get('/discover/tv', { params: category.params })
  );

  const response = await Promise.all(request)
    .then((res1) => res1)
    .then((res2) => Promise.all(res2.map((el) => el.data.results)));

  const data = response.map((resData, index) => ({
    category: showSearchParams[index].key,
    data: resData.map((movie) => getShowsData(movie)).slice(0, 10),
  }));

  res.status(StatusCodes.OK).json({
    status: 'success',
    results: response.length,
    data,
  });
};

const getShowList = async (req, res, next) => {
  const { response, maxPage } = await getListOfItems(
    '/discover/tv',
    req,
    showSearchParams
  );

  const data = response.data.results.map((movie) => getShowsData(movie));

  res.status(StatusCodes.OK).json({
    status: 'success',
    page: response.data.page,
    maxPage,
    results: data.length,
    data,
  });
};

const getShow = async (req, res, next) => {
  const { id } = req.params;

  const response = await axiosRequest.get(`/tv/${id}`);

  const { data } = response;

  const cast = await getCast('tv', data.id);

  const show = {
    id: data.id,
    title: data.name,
    status: data.status,
    releaseDate: data.first_air_date,
    overview: data.overview,
    backdropPath: data.backdrop_path,
    posterPath: data.poster_path,
    genres: data.genres.map((genre) => genre.name),
    rating: +data.vote_average.toFixed(1),
    languages: data.spoken_languages.map((language) => language.english_name),
    countries: data.production_countries.map((country) => country.name),
    numberOfSeasons: data.number_of_seasons,
    numberOfEpisodes: data.number_of_episodes,
    seasons: data.seasons
      .filter((item) => item.season_number !== 0)
      .map((season) => ({
        id: season.id,
        title: season.name,
        posterPath: season.poster_path,
        releaseDate: new Date(season.air_date).getFullYear(),
        rating: season.vote_average,
      })),
    cast,
  };

  res.status(StatusCodes.OK).json({
    status: 'success',
    data: show,
  });
};

const getSeason = async (req, res, next) => {
  const { id, seasonId } = req.params;

  const response = await axiosRequest.get(`/tv/${id}/season/${seasonId}`);
  const { data } = response;

  const season = {
    id: data.id,
    title: data.name,
    releaseDate: data.air_date,
    posterPath: data.poster_path,
    rating: +data.vote_average.toFixed(1),
    episodes: data.episodes.map((episode) => ({
      id: episode.id,
      showId: episode.show_id,
      number: episode.episode_number,
      title: episode.name,
      posterPath: episode.still_path,
      rating: +episode.vote_average.toFixed(1),
    })),
  };

  res.status(StatusCodes.OK).json({
    status: 'success',
    data: season,
  });
};

const getEpisode = async (req, res, next) => {
  const { id, seasonId, episodeId } = req.params;

  const response = await axiosRequest.get(
    `/tv/${id}/season/${seasonId}/episode/${episodeId}`
  );
  const { data } = response;

  const episode = {
    id: data.id,
    title: data.name,
    releaseDate: data.air_date,
    posterPath: data.still_path,
    rating: +data.vote_average.toFixed(1),
    overview: data.overview,
    episodeNumber: data.episode_number,
    seasonNumber: data.season_number,
    runtime: data.runtime,
    cast: data.guest_stars.map((actor) => ({
      id: actor.id,
      name: actor.name,
      imgPath: actor.profile_path,
    })),
  };

  res.status(StatusCodes.OK).json({
    status: 'success',
    data: episode,
  });
};

module.exports = {
  getShowListsByCategory,
  getShowList,
  getShow,
  getSeason,
  getEpisode,
};
