import { useState } from 'react';
import type { MoviesListTypes } from '../utils/types';
import Button from './Button';
import MoviesCard from './MoviesCard';
import ButtonLink from './ButtonLink';

interface ItemsListProps {
  movies: MoviesListTypes;
  heading: string;
  listLength?: 'short' | 'long';
  className?: string;
}

function ItemsList({
  movies,
  heading,
  listLength = 'short',
  className,
}: ItemsListProps) {
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
    <div className={`${className} flex flex-col pt-20`}>
      <h2 className="text-3xl font-semibold">{heading}</h2>
      <ul className="mb-8 mt-6 grid grid-cols-5 justify-items-center gap-y-16 px-4">
        {items.map((item) => (
          <MoviesCard item={item} key={item.id} />
        ))}
      </ul>
      {visibleItems === 10 && listLength === 'long' && (
        <Button
          color="primary"
          size="large"
          className="mt-10 self-center "
          onClick={handleClick}
        >
          View More {heading}
        </Button>
      )}
      {(visibleItems === 20 || listLength === 'short') && (
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
