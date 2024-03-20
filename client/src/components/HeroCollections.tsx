import { Link } from 'react-router-dom';
import useSlider from '../hooks/useSlider';
import { imgSize, imgURL } from '../utils/constants';
import { CollectionPoster } from '../utils/types';
import PaginationButton from './PaginationButton';

interface HeroCollectionsProps {
  posters: CollectionPoster[];
}

function HeroCollections({ posters }: HeroCollectionsProps) {
  const { currentMovie, nextMovie, prevMovie } = useSlider(posters, 5000);

  const sortItem = (index: number, collection: CollectionPoster[]) => {
    let style = 'hidden';
    if (index === currentMovie) style = 'translate-y-20 order-1 z-50';
    if (currentMovie !== collection.length - 1 && index === currentMovie + 1)
      style = 'order-2 -translate-y-2 -translate-x-12';
    if (currentMovie === collection.length - 1 && index === 0)
      style = 'order-2 -translate-y-2 -translate-x-12';
    if (currentMovie !== 0 && index === currentMovie - 1)
      style = 'order-first -translate-y-2 translate-x-12';
    if (currentMovie === 0 && index === collection.length - 1)
      style = 'order-first -translate-y-2 translate-x-12';

    return style;
  };

  return (
    <div className="flex h-hero items-center overflow-hidden">
      {posters.map((movie, index) => (
        <img
          key={movie.key}
          src={`${imgURL}${imgSize.large}${movie.img.backdropImg}`}
          alt="Collection backdrop poster"
          className={`absolute left-0 top-0 -z-10 h-screen w-full brightness-35 ${index === currentMovie ? '' : 'hidden'}`}
        />
      ))}

      <ul className="relative flex h-full w-full items-center justify-center">
        {posters.map((movie, index, collection) => (
          <li
            className={`z-40 flex cursor-pointer ${sortItem(index, collection)}`}
          >
            <Link to={'/'} className="">
              <img
                src={`${imgURL}${index === currentMovie ? imgSize.medium : imgSize.small}${movie.img.posterImg}`}
                alt="Collection poster"
                className={`rounded-md ${index === currentMovie ? 'w-56' : 'w-36'}`}
              />
            </Link>
          </li>
        ))}
      </ul>
      <div className="absolute left-0 top-0 z-10 h-screen w-full">
        <PaginationButton onClick={prevMovie} direction="prev" />
        <PaginationButton onClick={nextMovie} direction="next" />
      </div>
    </div>
  );
}

export default HeroCollections;
