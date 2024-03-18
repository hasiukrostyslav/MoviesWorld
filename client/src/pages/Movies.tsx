import { useGetMoviesListsQuery } from '../store';
import ItemsList from '../components/ItemsList';
import Spinner from '../components/Spinner';
import ErrorPage from './ErrorPage';

function Movies() {
  const { data, isFetching, isError } = useGetMoviesListsQuery();

  if (isFetching && !data) return <Spinner />;
  if (isError) return <ErrorPage code={500} message="Internal Server Error" />;

  if (data) {
    const {
      newMovies,
      popularNowMovies,
      popularAllMovies,
      topRatingMovies,
      topBoxOfficeMovies,
    } = data.data;

    return (
      <section>
        <ItemsList movies={newMovies} heading="New Movies" />
        <ItemsList movies={popularNowMovies} heading="Popular Now Movies" />
        <ItemsList movies={popularAllMovies} heading="Popular Movies" />
        <ItemsList movies={topRatingMovies} heading="Top Rating Movies" />
        <ItemsList
          movies={topBoxOfficeMovies}
          heading="Top Box Office Movies"
          className="pb-20"
        />
      </section>
    );
  }
}

export default Movies;
