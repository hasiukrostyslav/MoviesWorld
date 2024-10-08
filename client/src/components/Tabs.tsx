import { useSearchTabs } from '../hooks/useSearchTabs';
import Tab from './Tab';

function Tabs() {
  const {
    queryString,
    params: { type },
    leftPosition,
  } = useSearchTabs();

  return (
    <div
      className={`relative my-6 flex w-96 before:absolute ${leftPosition} before:-bottom-2 before:h-0.5 before:w-1/4 before:bg-blue-600 before:transition-all before:duration-500 before:content-[''] before:hover:bg-blue-400`}
    >
      <Tab tabType="" searchParamType={type || ''} to={`?${queryString}`}>
        All
      </Tab>
      <Tab
        tabType="movies"
        searchParamType={type}
        to={`?${queryString}&type=movies`}
      >
        Movies
      </Tab>
      <Tab
        tabType="shows"
        searchParamType={type}
        to={`?${queryString}&type=shows`}
      >
        Shows
      </Tab>
      <Tab
        tabType="actors"
        searchParamType={type}
        to={`?${queryString}&type=actors`}
      >
        Actors
      </Tab>
    </div>
  );
}

export default Tabs;
