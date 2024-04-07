import { Link } from 'react-router-dom';
import { imgSize, imgURL } from '../utils/constants';
import { ActorBaseData, ActorData } from '../utils/types';

interface ActorsCardProps {
  actor: ActorBaseData | ActorData;
  cast?: boolean;
  className?: string;
}

function ActorsCard({ actor, cast, className }: ActorsCardProps) {
  const character = actor ? actor.character?.replace('(uncredited)', '') : '';

  const formatNameLength = (name: string, num: number) =>
    name.length < 18 ? name : name.slice(0, num).padEnd(num + 2, '...');

  return (
    <li className={`relative flex w-44 flex-col ${className}`}>
      <img
        className="mb-3 w-full rounded-md"
        src={`${imgURL}${imgSize.small}${actor.imgPath}`}
        alt={`${actor.name} photo`}
      />
      <Link
        to={`/view/actor/${actor.id}`}
        className="rounded-lg p-1 font-semibold outline-0 ring-blue-500 focus-visible:ring-4"
      >
        {formatNameLength(actor.name, 16)}
      </Link>
      {cast && (
        <span className="ml-1 text-xs">{formatNameLength(character, 22)}</span>
      )}
    </li>
  );
}

export default ActorsCard;
