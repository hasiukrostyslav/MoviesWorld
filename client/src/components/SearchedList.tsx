import { ActorBaseData, MovieBaseData, ShowBaseData } from '../utils/types';
import ActorsCard from './ActorsCard';
import MoviesCard from './MoviesCard';

interface SearchedListProps {
  searchedItems: (MovieBaseData | ShowBaseData | ActorBaseData)[];
}

function SearchedList({ searchedItems }: SearchedListProps) {
  return (
    <ul className="mb-32 mt-6 grid grid-cols-5 justify-items-center gap-y-16 px-4">
      {searchedItems.map((item) => {
        if ('type' in item) return <MoviesCard item={item} key={item.id} />;
        if ('character' in item)
          return <ActorsCard actor={item} key={item.id} className="min-w-44" />;
      })}
    </ul>
  );
}

export default SearchedList;
