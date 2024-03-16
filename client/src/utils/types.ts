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

export interface GeneralData {
  status: 'success';
  data: {
    trendingAll: {
      results: number;
      data: HeroBaseData[];
    };
    trendingMovies: {
      results: number;
      data: MovieBaseData[];
    };
    trendingShows: {
      results: number;
      data: ShowBaseData[];
    };
    popularActors: {
      results: number;
      data: ActorBaseData[];
    };
  };
}
