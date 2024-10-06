export interface HeroBaseData {
  id: number;
  type: 'movie' | 'tv';
  title: string;
  overview: string;
  backdropImg: string;
  posterImg: string;
  genres: string[];
}

export interface MovieBaseData {
  id: number;
  type?: 'movie';
  title: string;
  posterImg: string;
  year: number;
  rating: number;
}

export interface ShowBaseData {
  id: number;
  type?: 'tv';
  title: string;
  posterImg: string;
  year: number;
  rating: number;
}

export interface SeasonBaseData extends ShowBaseData {
  seasonId: number;
  seasonNumber: number;
  season: true;
}

export interface ActorBaseData {
  id: number;
  name: string;
  posterImg: string;
  character: string | null;
}

export interface CollectionData {
  id: number[];
  key: string;
  collection: string[];
  backdropImg: string;
  img: {
    posterImg: string;
    backdropImg: string;
  };
  movies: MovieBaseData[];
}

export interface CollectionPoster {
  key: string;
  img: {
    posterImg: string;
    backdropImg: string;
  };
}

export type HomeGeneralTypes =
  | HeroBaseData[]
  | MovieBaseData[]
  | ShowBaseData[]
  | ActorBaseData[];

export interface HomePageResponse {
  status: 'success';
  results: number;
  data: {
    category: string;
    data: HomeGeneralTypes;
  }[];
}

export interface MoviesPageResponse {
  status: 'success';
  results: number;
  data: {
    category: string;
    data: MovieBaseData[];
  }[];
}
export interface CartoonsPageResponse {
  status: 'success';
  results: number;
  data: {
    category: string;
    type: string;
    data: MovieBaseData[];
  }[];
}

export interface CollectionsPageResponse {
  status: 'success';
  results: number;
  data: CollectionData[];
}
export interface CollectionsList {
  status: 'success';
  results: number;
  data: CollectionData;
}

export interface ActorsPageResponse {
  status: 'success';
  page: number;
  totalPages: number;
  results: number;
  data: ActorBaseData[];
}

export interface MovieCategoryResponse {
  status: 'success';
  page: number;
  totalPages: number;
  results: number;
  data: MovieBaseData[];
}
export interface ShowCategoryResponse {
  status: 'success';
  page: number;
  totalPages: number;
  results: number;
  data: ShowBaseData[];
}
export interface CartoonsCategoryResponse {
  status: 'success';
  page: number;
  totalPages: number;
  results: number;
  data: MovieBaseData[];
}

export interface MovieResponse {
  status: 'success';
  data: Movie;
}

export interface Movie {
  id: number;
  title: string;
  overview: string;
  posterImg: string;
  backdropImg: string;
  status: string;
  releaseDate: string;
  runtime: number;
  revenue: number;
  rating: number;
  budget: number;
  genres: string[];
  countries: string[];
  languages: string[];
  cast: ActorBaseData[];
  collection: MovieBaseData[];
  videoKey: string | null;
}

export interface ShowResponse {
  status: 'success';
  data: Show;
}

export interface Show {
  id: number;
  title: string;
  overview: string;
  posterImg: string;
  backdropImg: string;
  status: string;
  releaseDate: string;
  runtime: number;
  revenue: number;
  rating: number;
  budget: number;
  genres: string[];
  countries: string[];
  languages: string[];
  numberOfSeasons: number;
  numberOfEpisodes: number;
  cast: ActorBaseData[];
  seasons: SeasonBaseData[];
  videoKey: string | null;
}

export interface ShowSeasonResponse {
  status: 'success';
  data: ShowSeason;
}

export interface EpisodeBaseData {
  id: number;
  showId: number;
  seasonNumber: number;
  number: number;
  title: string;
  posterImg: string;
  rating: number;
}

export interface EpisodeData extends EpisodeBaseData {
  releaseDate: string;
  overview: string;
  runtime: number;
}

export interface ShowSeason {
  showId: number;
  seasonId: number;
  seasonTitle: string;
  seasonNumber: number;
  numberOfEpisodes: number;
  numberOfSeasons: number;
  title: string;
  releaseDate: string;
  posterImg: string;
  backdropImg: string;
  genres: string[];
  rating: number;
  overview: string;
  videoKey: string;
  backupPoster: string;
  episodes: EpisodeBaseData[];
  seasons: SeasonBaseData[];
  cast: ActorBaseData[];
}

export interface ShowEpisodeResponse {
  status: 'success';
  data: ShowEpisode;
}

export interface ShowEpisode {
  id: number;
  showTitle: string;
  title: string;
  releaseDate: string;
  posterImg: string;
  rating: number;
  overview: string;
  episodeNumber: number;
  seasonNumber: number;
  numberOfSeasons: number;
  runtime: number;
  videoKey: string;
  backupPoster: string;
  episodes: EpisodeData[];
  cast: ActorBaseData[];
}

export interface ActorResponse {
  status: 'success';
  data: Actor;
}

export interface Actor {
  id: number;
  name: string;
  birthday: string;
  age: number;
  deathday: string | null;
  birthplace: string;
  posterImg: string;
  biography: string;
  credits: (MovieBaseData | ShowBaseData)[];
}

export type MoviesListTypes =
  | MovieBaseData[]
  | ShowBaseData[]
  | SeasonBaseData[];
export type MoviesTypes = MovieBaseData | ShowBaseData | SeasonBaseData;

export interface SearchResponse {
  status: 'success';
  data: {
    page: number;
    totalPages: number;
    totalResults: number;
    results: number;
    resultPerPage: number;
    data: (MovieBaseData | ShowBaseData | ActorBaseData)[];
  };
}

export interface SearchMoviesResponse {
  status: 'success';
  results: number;
  page: number;
  totalPages: number;
  data: MovieBaseData[];
}

export interface SearchShowsResponse {
  status: 'success';
  results: number;
  page: number;
  totalPages: number;
  data: ShowBaseData[];
}

export interface SearchActorsResponse {
  status: 'success';
  results: number;
  page: number;
  totalPages: number;
  data: ActorBaseData[];
}
