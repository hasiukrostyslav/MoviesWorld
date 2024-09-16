import { useParams, useSearchParams } from 'react-router-dom';
import { useGetCartoonsByCategoryQuery } from '../store';
import FilmListLong from '../components/FilmListLong';
import Pagination from '../components/Pagination';
import Spinner from '../components/Spinner';
import ErrorPage from './ErrorPage';
import { convertParamToString } from '../utils/helper';

function CartoonsByCategoryPage() {
  const params = useParams();
  const [searchParams] = useSearchParams();
  const { key, type } = params;
  const page = searchParams.get('page') || 1;

  const { data, isFetching, isError } = useGetCartoonsByCategoryQuery({
    key,
    type,
    page: +page,
  });

  if (isFetching && !data) return <Spinner />;
  if (isError) return <ErrorPage code={500} message="Internal Server Error" />;

  if (data) {
    const { data: movies, page: currentPage, totalPages } = data;

    return (
      <section className="flex flex-col py-20">
        <FilmListLong
          movies={movies}
          heading={`${convertParamToString(key)} Cartoon ${
            type === 'movie' ? 'Movies' : 'Serials'
          }`}
        />
        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </section>
    );
  }
}

export default CartoonsByCategoryPage;
