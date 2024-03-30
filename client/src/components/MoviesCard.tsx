import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa6';
import { imgSize, imgURL } from '../utils/constants';
import { MoviesTypes } from '../utils/types';

interface MoviesCardProps {
  item: MoviesTypes;
  frame?: boolean;
  className?: string;
}

function MoviesCard({ item, frame, className }: MoviesCardProps) {
  return (
    <li className={`relative min-w-44 ${frame ? 'text-slate-100' : ''}`}>
      <div className={`rounded-md ${className}`}>
        <div className="relative">
          <img
            className="mb-3 w-full rounded-md"
            src={`${imgURL}${imgSize.small}${item.posterPath}`}
            alt={`${item.title} poster`}
          />
          <span className="absolute top-0 bg-red-600 px-4 text-slate-100">
            {item.rating.toFixed(1)}
          </span>
        </div>

        <Link
          to={`/view/${item.type}/${item.id}`}
          className="rounded-lg p-1 font-semibold outline-0 ring-blue-500 focus-visible:ring-4"
        >
          {item.title.length < 18
            ? item.title
            : item.title.slice(0, 18).padEnd(21, '...')}
        </Link>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-sm font-light">{item.year}</span>
          <button className="rounded-lg p-1 font-semibold outline-0 ring-blue-500 focus-visible:ring-4">
            <FaHeart />
          </button>
        </div>
      </div>
    </li>
  );
}

export default MoviesCard;
