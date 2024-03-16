import { useState } from 'react';
import { MoviesListTypes } from '../utils/types';
import Button from './Button';
import MoviesCard from './MoviesCard';
import ButtonLink from './ButtonLink';

interface ItemsListProps {
  movies: MoviesListTypes;
  heading: string;
}

function ItemsList({ movies, heading }: ItemsListProps) {
  const [visibleItems, setVisibleItems] = useState(10);

  const handleClick = () => {
    setVisibleItems(20);
  };

  let items;
  if (visibleItems === 10) {
    items = movies.slice(0, 10);
  } else {
    items = movies;
  }

  return (
    <div className="flex flex-col py-20">
      <h2 className="text-4xl font-semibold">{heading}</h2>
      <ul className="mb-8 mt-6 grid grid-cols-5 justify-between gap-y-16 px-4">
        {items.map((item) => (
          <MoviesCard item={item} key={item.id} />
        ))}
      </ul>
      {visibleItems === 10 && (
        <Button
          color="primary"
          size="large"
          className="mt-10 self-center "
          onClick={handleClick}
        >
          View More {heading}
        </Button>
      )}
      {visibleItems === 20 && (
        <ButtonLink
          path="/"
          color="primary"
          size="large"
          className="mt-10 self-center"
        >
          View All {heading}
        </ButtonLink>
      )}
    </div>
  );
}

export default ItemsList;
