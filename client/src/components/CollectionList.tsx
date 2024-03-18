import type { CollectionData } from '../utils/types';
import MoviesCard from './MoviesCard';
import ButtonLink from './ButtonLink';
import { imgSize, imgURL } from '../utils/constants';

interface CollectionListProps {
  collection: CollectionData;
  heading: string;
  listLength?: 'short' | 'full';
  className?: string;
  logoName: string;
}

function CollectionList({
  collection,
  heading,
  listLength = 'short',
  className,
  logoName,
}: CollectionListProps) {
  return (
    <div className={`${className} pt-20`}>
      <div className="flex items-end justify-between">
        <img
          src={
            logoName !== 'jb007'
              ? `${logoName}-logo.png`
              : `${logoName}-logo.webp`
          }
          alt={`${heading} logo`}
          className="h-20"
        />
        {listLength === 'short' && (
          <ButtonLink path="/" color="primary" size="medium">
            View All Movies
          </ButtonLink>
        )}
      </div>
      <div className="relative mt-4 flex flex-col overflow-hidden rounded-md px-2 pb-8 pt-52">
        <img
          src={`${imgURL}${imgSize.large}${collection.backdropImg[0]}`}
          alt={`${heading} poster`}
          className="absolute left-0 top-0 z-0 h-full w-full brightness-75"
        />

        <ul className="mb-8 mt-6 grid grid-cols-5 justify-items-center gap-y-16 px-4">
          {collection.movies.map((item) => (
            <MoviesCard
              item={item}
              key={item.id}
              frame
              className="bg-opacity p-3"
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CollectionList;
