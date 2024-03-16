import { useEffect, useState } from 'react';
import type { HeroBaseData } from '../utils/types';
import HeroItem from './HeroItem';
import PaginationButton from './PaginationButton';

interface HeroProps {
  movies: HeroBaseData[];
}

function Hero({ movies }: HeroProps) {
  const [currentMovie, setCurrentMovie] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentMovie(
        currentMovie === movies.length - 1 ? 0 : currentMovie + 1,
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, [movies, currentMovie]);

  const nextMovie = () =>
    setCurrentMovie((c) => (c === movies.length - 1 ? 0 : c + 1));
  const prevMovie = () =>
    setCurrentMovie((c) => (c === 0 ? movies.length - 1 : c - 1));

  return (
    <>
      <ul className="flex h-hero overflow-hidden">
        {movies &&
          movies.map((movie, i) => (
            <HeroItem
              key={movie.id}
              movie={movie}
              index={i}
              currentMovie={currentMovie}
            />
          ))}
      </ul>
      <div className="absolute left-0 top-0 z-10 h-screen w-full">
        <PaginationButton onClick={prevMovie} direction="prev" />
        <PaginationButton onClick={nextMovie} direction="next" />
      </div>
    </>
  );
}

export default Hero;
