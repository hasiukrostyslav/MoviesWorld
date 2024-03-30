export interface HeroBaseData {
  id: number;
  title: string;
  overview: string;
  backdropPath: string;
  posterPath: string;
  genres: string[];
}

export interface MovieBaseData {
  id: number;
  title: string;
  posterPath: string;
  year: number;
  rating: number;
}

export interface ShowBaseData {
  id: number;
  title: string;
  posterPath: string;
  year: number;
  rating: number;
}

export interface ActorBaseData {
  id: number;
  name: string;
  imgPath: string;
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

export interface CollectionsPageResponse {
  status: 'success';
  results: number;
  data: CollectionData[];
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

export type MoviesListTypes = MovieBaseData[] | ShowBaseData[];
export type MoviesTypes = MovieBaseData | ShowBaseData;
