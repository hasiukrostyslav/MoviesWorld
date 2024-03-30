import { useGetCartoonsListsQuery } from '../store';
import FilmListShort from '../components/FilmsListShort';
import Spinner from '../components/Spinner';
import ErrorPage from './ErrorPage';

function Cartoons() {
  const { data, isFetching, isError } = useGetCartoonsListsQuery();

  if (isFetching && !data) return <Spinner />;
  if (isError) return <ErrorPage code={500} message="Internal Server Error" />;

  if (data) {
    const categories = data.data;

    return (
      <section>
        {categories.map((category, i, arr) => (
          <FilmListShort
            path={``}
            key={category.category}
            movies={category.data}
            heading={`${category.category}`}
            className={i === arr.length - 1 ? 'pb-20' : ''}
          />
        ))}
      </section>
    );
  }
}

export default Cartoons;
