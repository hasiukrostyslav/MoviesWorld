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

export interface HomePageResponse {
  status: 'success';
  data: {
    trendingAll: HeroBaseData[];
    trendingMovies: MovieBaseData[];
    trendingShows: ShowBaseData[];
    popularActors: ActorBaseData[];
  };
}

export interface MoviesPageResponse {
  status: 'success';
  data: {
    newMovies: MovieBaseData[];
    popularNowMovies: MovieBaseData[];
    popularAllMovies: MovieBaseData[];
    topRatingMovies: MovieBaseData[];
    topBoxOfficeMovies: MovieBaseData[];
  };
}

export type MoviesListTypes = MovieBaseData[] | ShowBaseData[];
export type MoviesTypes = MovieBaseData | ShowBaseData;
