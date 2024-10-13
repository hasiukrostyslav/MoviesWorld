import { Link } from 'react-router-dom';
import type { MoviesTypes } from '../utils/types';
import Icon from './Icon';
import { useDispatch } from 'react-redux';
import { util } from '../store';
import { formatTextLength } from '../utils/helper';

const IMG_URL_SMALL = import.meta.env.VITE_IMG_URL_SMALL;

interface MoviesCardProps {
  item: MoviesTypes;
  frame?: boolean;
  className?: string;
  hidden?: 'hidden' | '';
}

function MoviesCard({ item, frame, className, hidden }: MoviesCardProps) {
  const dispatch = useDispatch();

  return (
    <li
      onClick={() => dispatch(util.resetApiState())}
      className={`relative box-content min-w-44 ${frame ? 'text-slate-100' : ''} ${hidden || ''}`}
    >
      <div className={`w-full ${className}`}>
        <Link
          to={`/view/${item.type}/${item.id}${'season' in item ? `/season/${item.seasonNumber}` : ''}`}
          className="outline-round flex w-full flex-col p-2 font-semibold hover:text-slate-400"
        >
          <div className="relative">
            <img
              className="mb-3 w-full rounded-md transition-all duration-500 hover:opacity-70"
              src={
                item.posterImg
                  ? `${IMG_URL_SMALL}${item.posterImg}`
                  : `/imgMovieAlt.jpg`
              }
              alt={`${item.title} poster`}
            />
            {item.rating > 0 && (
              <span
                className={`absolute top-0 rounded-br-md px-4 text-slate-100 ${item.rating >= 8 ? 'bg-green-500' : item.rating < 8 && item.rating >= 7 ? 'bg-yellow-500' : 'bg-red-600'}`}
              >
                {item.rating.toFixed(1)}
              </span>
            )}
          </div>
          <span>{formatTextLength(item.title, 17, 20)}</span>
        </Link>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-sm font-light">{item.year}</span>
          <button className="outline-round p-1 font-semibold">
            <Icon name="favorite" />
          </button>
        </div>
      </div>
    </li>
  );
}

export default MoviesCard;
