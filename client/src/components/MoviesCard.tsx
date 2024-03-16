import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa6';
import { imgSize, imgURL } from '../utils/constants';
import { MoviesTypes } from '../utils/types';

interface MoviesCardProps {
  item: MoviesTypes;
}

function MoviesCard({ item }: MoviesCardProps) {
  return (
    <li className="relative w-44">
      <img
        className="mb-3 w-full rounded-md"
        src={`${imgURL}${imgSize.small}${item.posterPath}`}
        alt={`${item.title} poster`}
      />
      <Link to="/" className="font-semibold">
        {item.title.length < 18
          ? item.title
          : item.title.slice(0, 18).padEnd(21, '...')}
      </Link>
      <div className="mt-2 flex items-center justify-between">
        <span className="text-sm font-light">{item.year}</span>
        <button>
          <FaHeart />
        </button>
      </div>
      <div className="absolute top-0 bg-red-600 px-4 text-slate-100">
        {item.rating.toFixed(1)}
      </div>
    </li>
  );
}

export default MoviesCard;
