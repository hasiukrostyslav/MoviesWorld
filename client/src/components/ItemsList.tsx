import { MoviesListTypes } from '../utils/types';
import Button from './Button';
import MoviesCard from './MoviesCard';

interface ItemsListProps {
  movies: MoviesListTypes;
  heading: string;
}

function ItemsList({ movies, heading }: ItemsListProps) {
  return (
    <div className="flex flex-col py-20">
      <h2 className="text-4xl font-semibold">{heading}</h2>
      <ul className="mb-8 mt-6 grid grid-cols-5 justify-between gap-y-16 px-4">
        {movies.map((item) => (
          <MoviesCard item={item} key={item.id} />
        ))}
      </ul>
      <Button color="primary" size="large" className="mt-10 self-center">
        View All {heading}
      </Button>
    </div>
  );
}

export default ItemsList;
