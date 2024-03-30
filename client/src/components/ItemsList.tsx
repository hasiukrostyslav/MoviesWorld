import type { MoviesListTypes } from '../utils/types';
import MoviesCard from './MoviesCard';

interface ItemsListProps {
  path?: string;
  movies: MoviesListTypes;
  heading: string;
  isShort?: boolean;
  className?: string;
  children?: React.ReactNode;
}

function ItemsList({
  movies,
  heading,
  className,
  isShort,
  children,
}: ItemsListProps) {
  const items = isShort ? movies.slice(0, 10) : movies;

  return (
    <div className={`flex flex-col pt-20 ${className}`}>
      <h2 className="text-3xl font-semibold">{heading}</h2>
      <ul className="mb-8 mt-6 grid grid-cols-5 justify-items-center gap-y-16 px-4">
        {items.map((movie) => (
          <MoviesCard item={movie} key={movie.id} />
        ))}
      </ul>
      {children}
    </div>
  );
}

export default ItemsList;
