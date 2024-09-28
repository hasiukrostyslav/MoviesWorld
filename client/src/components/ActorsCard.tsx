import { Link } from 'react-router-dom';
import type { ActorBaseData } from '../utils/types';

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

  const formatNameLength = (name: string, num: number) =>
    name.length < 18 ? name : name.slice(0, num).padEnd(num + 2, '...');

  return (
    <li className={`relative flex flex-col ${className || 'w-44'}`}>
      <Link
        to={`/view/actor/${actor.id}`}
        className="rounded-lg font-semibold outline-0 ring-blue-500 transition-all duration-500 hover:text-slate-400 focus-visible:ring-4"
      >
        <img
          className="mb-3 w-full rounded-md transition-all duration-500 hover:opacity-70"
          src={
            actor.imgPath
              ? `${IMG_URL_SMALL}${actor.imgPath}`
              : `/imgActorAlt.jpg`
          }
          alt={`${actor.name} photo`}
        />
        {formatNameLength(actor.name, 16)}
      </Link>
      {cast && (
        <span className="ml-1 mt-1 text-xs">
          {formatNameLength(character, 22)}
        </span>
      )}
    </li>
  );
}

export default ActorsCard;
