import { Link } from 'react-router-dom';
import type { ActorBaseData } from '../utils/types';
import { formatTextLength } from '../utils/helper';

const IMG_URL_SMALL = import.meta.env.VITE_IMG_URL_SMALL;

interface ActorsCardProps {
  actor: ActorBaseData;
  cast?: boolean;
  className?: string;
}

function ActorsCard({ actor, cast, className }: ActorsCardProps) {
  const character = actor.character
    ? actor.character.replace('(uncredited)', '')
    : '';

  return (
    <li className={`relative flex flex-col ${className || 'w-44'}`}>
      <Link
        to={`/view/actor/${actor.id}`}
        className="outline-round flex w-full flex-col p-2 font-semibold hover:text-slate-400"
      >
        <img
          className="mb-3 w-full rounded-md transition-all duration-500 hover:opacity-70"
          src={
            actor.posterImg
              ? `${IMG_URL_SMALL}${actor.posterImg}`
              : `/imgActorAlt.jpg`
          }
          alt={`${actor.name} photo`}
        />
        {formatTextLength(actor.name, 18, 16)}
        {cast && (
          <span className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            {formatTextLength(character, 18, 22)}
          </span>
        )}
      </Link>
    </li>
  );
}

export default ActorsCard;
