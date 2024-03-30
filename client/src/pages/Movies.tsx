import { useGetMoviesListsQuery } from '../store';
import ItemsList from '../components/ItemsList';
import Spinner from '../components/Spinner';
import ErrorPage from './ErrorPage';

function Movies() {
  const { data, isFetching, isError } = useGetMoviesListsQuery();

  if (isFetching && !data) return <Spinner />;
  if (isError) return <ErrorPage code={500} message="Internal Server Error" />;

  if (data) {
    const categories = data.data;

    return (
      <section>
        {categories.map((category, i, arr) => (
          <ItemsList
            key={category.category}
            movies={category.data}
            heading={`${category.category} Movies`}
            className={i === arr.length - 1 ? 'pb-20' : ''}
          />
        ))}
      </section>
    );
  }
}

export default Movies;
