import { useGetShowsListsQuery } from '../store/api/showsAPI';
import ItemsList from '../components/ItemsList';
import Spinner from '../components/Spinner';
import ErrorPage from './ErrorPage';

function TVShows() {
  const { data, isFetching, isError } = useGetShowsListsQuery();

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
            heading={`${category.category} Shows`}
            className={i === arr.length - 1 ? 'pb-20' : ''}
          />
        ))}
      </section>
    );
  }
}

export default TVShows;
