import { Link } from 'react-router-dom';
import type { EpisodeBaseData } from '../utils/types';

const IMG_URL_LARGE = import.meta.env.VITE_IMG_URL_LARGE;

interface EpisodeCardProps {
  episode: EpisodeBaseData;
  backupPoster: string;
}

function EpisodeCard({ episode, backupPoster }: EpisodeCardProps) {
  const { seasonNumber, title, posterPath, number: episodeNum } = episode;

  return (
    <li className="">
      <Link
        to={`episode/${episodeNum}`}
        className="flex flex-col rounded-lg font-semibold outline-0 ring-blue-500 transition-all duration-500 hover:text-slate-400 focus-visible:ring-4 hover:dark:text-slate-400"
      >
        <img
          className="rounded-md transition-all duration-500 hover:opacity-70"
          src={`${IMG_URL_LARGE}${posterPath || backupPoster}`}
          alt="Episode Image"
        />
        <span className="my-1 ml-1 text-sm font-light">
          {seasonNumber}x{episodeNum < 10 ? `0${episodeNum}` : episodeNum}
        </span>
        {title}
      </Link>
    </li>
  );
}

export default EpisodeCard;
