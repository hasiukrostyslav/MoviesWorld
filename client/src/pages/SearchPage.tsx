import { useSearchParams } from 'react-router-dom';
import SearchedList from '../components/SearchedList';
import Tabs from '../components/Tabs';

function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  return (
    <section className="flex flex-col py-16">
      <h2 className="text-2xl font-semibold">
        Search results:{' '}
        <span className="text-xl font-medium text-slate-700 dark:text-slate-400">
          "{query}"
        </span>
      </h2>
      <Tabs />
      <SearchedList />
    </section>
  );
}
export default SearchPage;
