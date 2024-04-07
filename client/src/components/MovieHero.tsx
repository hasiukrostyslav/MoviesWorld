import { imgSize, imgURL } from '../utils/constants';
import { Movie } from '../utils/types';
import BackdropPoster from './BackdropPoster';
import Button from './Button';
import Icon from './Icon';
import Poster from './Poster';
import Video from './Video';

interface MovieHeroProps {
  movie: Movie;
  isOpenFrame: boolean;
  openVideoFrame(): void;
}

function MovieHero({ movie, isOpenFrame, openVideoFrame }: MovieHeroProps) {
  const {
    backdropPath,
    posterPath,
    title,
    releaseDate,
    rating,
    genres,
    overview,
    videoKey,
  } = movie;

  return (
    <div className="h-hero">
      <BackdropPoster src={backdropPath} title={title} />
      {isOpenFrame && <Video videoKey={videoKey} />}

      <div className="flex h-full items-center gap-10">
        <div className="basis-1/4">
          <Poster
            src={`${imgURL}${imgSize.large}${posterPath}`}
            title={title}
          />
        </div>

        <div className="flex basis-2/3 flex-col">
          <div className="flex flex-col">
            <h2 className="mb-4 flex items-end gap-2 text-3xl font-bold">
              {title}
              <span className="text-xl font-normal text-slate-400">
                {new Date(releaseDate).getFullYear()}
              </span>
            </h2>

            <p className="flex items-center gap-1 text-sm">
              <Icon name="star" />
              <span className="italic text-slate-400">{rating}</span>
            </p>

            <span className="mb-5 mt-3 text-sm italic text-slate-400">
              {genres.join('  /  ')}
            </span>

            <p className="mb-6 ml-1 text-sm leading-8">{overview}</p>
          </div>

          <div className="mt-10 flex gap-8">
            <Button onClick={openVideoFrame} color="primary" size="large">
              Watch Trailer <Icon name="play" />
            </Button>
            <Button size="large" color="outline">
              Favorite <Icon name="favorite" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieHero;