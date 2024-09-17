import { Link } from 'react-router-dom';
import { useSlider } from '../hooks/useSlider';
import type { CollectionPoster } from '../utils/types';
import SliderButton from './SliderButton';
import BackdropPoster from './BackdropPoster';

const IMG_URL_SMALL = import.meta.env.VITE_IMG_URL_SMALL;
const IMG_URL_MEDIUM = import.meta.env.VITE_IMG_URL_MEDIUM;

interface CollectionsHeroProps {
  posters: CollectionPoster[];
}

function CollectionsHero({ posters }: CollectionsHeroProps) {
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
        <BackdropPoster
          key={movie.key}
          src={movie.img.backdropImg}
          title={movie.key}
          className={`${index === currentMovie ? '' : 'hidden'}`}
        />
      ))}

      <ul className="relative flex h-full w-full items-center justify-center">
        {posters.map((movie, index, collection) => (
          <li
            key={movie.key}
            className={`z-40 flex cursor-pointer ${sortItem(index, collection)}`}
          >
            <Link
              to={`${movie.key.replaceAll('_', '-').toLowerCase()}`}
              className="rounded-md font-semibold outline-0 ring-blue-500 focus-visible:ring-4"
            >
              <img
                src={`${index === currentMovie ? IMG_URL_MEDIUM : IMG_URL_SMALL}${movie.img.posterImg}`}
                alt="Collection poster"
                className={`rounded-md transition-all duration-500 hover:opacity-80  ${index === currentMovie ? 'w-56' : 'w-36'}`}
              />
            </Link>
          </li>
        ))}
      </ul>
      <div className="absolute left-0 top-0 z-10 h-screen w-full">
        <SliderButton onClick={prevMovie} direction="prev" />
        <SliderButton onClick={nextMovie} direction="next" />
      </div>
    </div>
  );
}

export default CollectionsHero;
