import { useEffect, useState } from 'react';
import axios from 'axios';
import type { MovieBaseData } from '../utils/types';
import HeroItem from './HeroItem';
import PaginationButton from './PaginationButton';

function Hero() {
  const [movies, setMovies] = useState<MovieBaseData[] | []>([]);
  const [currentMovie, setCurrentMovie] = useState(0);

  useEffect(() => {
    axios('/api').then((res) => {
      setMovies(res.data.data);
    });
  }, []);

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
      <ul className="h-hero flex overflow-hidden">
        {movies &&
          movies.map((movie, i) => (
            <HeroItem movie={movie} index={i} currentMovie={currentMovie} />
          ))}
      </ul>
      <div>
        <PaginationButton onClick={prevMovie} direction="prev" />
        <PaginationButton onClick={nextMovie} direction="next" />
      </div>
    </>
  );
}

export default Hero;
