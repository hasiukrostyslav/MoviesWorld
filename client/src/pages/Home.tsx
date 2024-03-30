import { useGetTrendListQuery } from '../store';
import Hero from '../components/Hero';
import Spinner from '../components/Spinner';
import FilmListShort from '../components/FilmsListShort';
import ActorsList from '../components/ActorsList';
import ErrorPage from './ErrorPage';

import type {
  HeroBaseData,
  HomeGeneralTypes,
  MoviesListTypes,
} from '../utils/types';

function Home() {
  const { data, isFetching, isError } = useGetTrendListQuery();

  if (isFetching && !data) return <Spinner />;
  if (isError) return <ErrorPage code={500} message="Internal Server Error" />;

  if (data) {
    const categories = data.data;

    const IsHeroData = (data: HomeGeneralTypes): data is HeroBaseData[] => {
      if (data.every((el) => Object.hasOwn(el, 'backdropPath'))) return true;
      else return false;
    };

    const IsMoviesData = (data: HomeGeneralTypes): data is MoviesListTypes => {
      if (data.every((el) => Object.hasOwn(el, 'year'))) return true;
      else return false;
    };

    return (
      <section>
        {categories.map((category) => {
          if (IsHeroData(category.data)) {
            return <Hero key={category.category} movies={category.data} />;
          } else if (IsMoviesData(category.data)) {
            return (
              <FilmListShort
                key={category.category}
                movies={category.data}
                heading={category.category}
                path={`/trending/${category.category.includes('Movies') ? 'movies' : 'tv'}`}
              />
            );
          } else {
            return (
              <ActorsList
                key={category.category}
                actors={category.data}
                heading={category.category}
                className="pb-20"
              />
            );
          }
        })}
      </section>
    );
  }
}

export default Home;
