import { useMatch } from 'react-router-dom';
import { IoSearch } from 'react-icons/io5';

function SearchForm() {
  const match = useMatch('/');

  return (
    <form className="relative">
      <input
        placeholder="Search here"
        type="text"
        className={`rounded-md border-2 border-slate-300 py-2 pl-3 pr-10 text-sm outline-0 ring-blue-500 focus:border-transparent focus-visible:ring-4 dark:border-transparent  ${match ? 'border-transparent bg-slate-600 text-slate-200' : 'dark:bg-slate-600'}`}
      />
      <button
        className={`absolute right-1 top-1 rounded p-2 outline-0 ring-blue-500 focus-visible:ring-4 ${match ? 'text-slate-200' : 'text-slate-400 dark:text-slate-200'}`}
      >
        <IoSearch />
      </button>
    </form>
  );
}

export default SearchForm;
