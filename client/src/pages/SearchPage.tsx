import { useSearchParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { useGetSearchedItemsQuery } from '../store';
import ErrorPage from './ErrorPage';
import Pagination from '../components/Pagination';
import SearchedList from '../components/SearchedList';
import Tabs from '../components/Tabs';

function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const page = searchParams.get('page') || 1;
  const type = searchParams.get('type') || '';

  const { data, isFetching, isError } = useGetSearchedItemsQuery({
    query,
    page,
    type,
  });

  if (isFetching && !data) return <Spinner />;
  if (isError) return <ErrorPage code={500} message="Internal Server Error" />;

  if (data) {
    const { data: searchedData, page: currentPage, totalPages } = data;

    return (
      <section className="flex flex-col pt-20">
        <h2 className="text-2xl font-semibold">
          Search results:{' '}
          <span className="text-xl font-medium text-slate-700 dark:text-slate-400">
            "{query}"
          </span>
        </h2>
        <Tabs />
        <SearchedList searchedItems={searchedData} />
        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </section>
    );
  }
}
export default SearchPage;
