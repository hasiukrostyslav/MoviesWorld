import { Link } from 'react-router-dom';
import { imgSize, imgURL } from '../utils/constants';
import { ActorBaseData } from '../utils/types';

interface ActorsCardProps {
  actor: ActorBaseData;
}

function ActorsCard({ actor }: ActorsCardProps) {
  return (
    <li className="relative w-44">
      <img
        className="mb-3 w-full rounded-md"
        src={`${imgURL}${imgSize.small}${actor.imgPath}`}
        alt={`${actor.name} poster`}
      />
      <Link
        to={`/`}
        className="rounded-lg p-1 font-semibold outline-0 ring-blue-500 focus-visible:ring-4"
      >
        {actor.name.length < 18
          ? actor.name
          : actor.name.slice(0, 16).padEnd(18, '...')}
      </Link>
    </li>
  );
}

export default ActorsCard;
