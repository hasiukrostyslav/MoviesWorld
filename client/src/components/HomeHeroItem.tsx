import type { HeroBaseData } from '../utils/types';
import Poster from './Poster';
import ButtonLink from './ButtonLink';
import BackdropPoster from './BackdropPoster';

const IMG_URL_MEDIUM = import.meta.env.VITE_IMG_URL_MEDIUM;

interface HeroItemProps {
  movie: HeroBaseData;
  currentMovie: number;
  index: number;
}

function HomeHeroItem({ movie, currentMovie, index }: HeroItemProps) {
  return (
    <li
      className={`flex min-w-full text-slate-100 ${index === currentMovie ? '' : 'hidden'}`}
    >
      <BackdropPoster src={movie.backdropPath} title={movie.title} />

      <div className="z-20 flex w-full items-center justify-between">
        <div className="flex basis-1/2 flex-col">
          <h1 className="mb-4 text-5xl font-bold">{movie.title}</h1>
          <span className="mb-5 ml-2 text-xs">
            {movie.genres.join('  /  ')}
          </span>
          <p className="mb-6 ml-1 text-sm leading-8">
            {movie.overview.length < 200
              ? movie.overview
              : movie.overview.slice(0, 200).padEnd(205, '.....')}
          </p>
          <ButtonLink
            path={`/view/${movie.type}/${movie.id}`}
            className="z-20 ml-1 self-start"
            color="primary"
            size="large"
          >
            View Movie
          </ButtonLink>
        </div>
        <div className="basis-1/4">
          <Poster
            src={`${IMG_URL_MEDIUM}${movie.posterPath}`}
            title={movie.title}
          />
        </div>
      </div>
    </li>
  );
}

export default HomeHeroItem;
