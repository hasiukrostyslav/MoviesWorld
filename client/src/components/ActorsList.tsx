import { useState } from 'react';
import { ActorBaseData } from '../utils/types';
import ActorsCard from './ActorsCard';
import Button from './Button';
import ButtonLink from './ButtonLink';

interface ItemsListProps {
  actors: ActorBaseData[];
  heading: string;
  className?: 'string';
}

function ActorsList({ actors, heading, className }: ItemsListProps) {
  const [visibleItems, setVisibleItems] = useState(10);

  const handleClick = () => {
    setVisibleItems(20);
  };

  let items;
  if (visibleItems === 10) {
    items = actors.slice(0, 10);
  } else {
    items = actors;
  }

  return (
    <div className={`${className} flex flex-col pt-20`}>
      <h2 className="text-3xl font-semibold">{heading}</h2>
      <ul className="mb-8 mt-6 grid grid-cols-5 justify-between gap-y-16 px-4">
        {items.map((item) => (
          <ActorsCard actor={item} key={item.id} />
        ))}
      </ul>
      {visibleItems === 10 && (
        <Button
          onClick={handleClick}
          color="primary"
          size="large"
          className="mt-10 self-center"
        >
          View All {heading}
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

export default ActorsList;
