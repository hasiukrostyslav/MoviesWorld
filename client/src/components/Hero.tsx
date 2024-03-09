import { useEffect, useState } from 'react';
import axios from 'axios';
import { imgSize, imgURL } from '../utils/constants';
import Button from './Button';
import PaginationButton from './PaginationButton';
import Poster from './Poster';
import type { MovieBaseData } from '../utils/types';

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
            <li
              key={movie.id}
              className={`flex min-w-full ${i === currentMovie ? '' : 'hidden'}`}
            >
              <img
                src={`${imgURL}/${imgSize.large}/${movie.backdropPath}`}
                alt="Film backdrop poster"
                className="absolute left-0 top-0 -z-10 h-screen w-full brightness-35"
              />
              <div className="flex items-center justify-between">
                <div className="flex basis-1/2 flex-col">
                  <h1 className="mb-4 text-5xl font-bold">{movie.title}</h1>
                  <span className="mb-5 ml-2 text-xs">
                    {movie.genres.join('  /  ')}
                  </span>
                  <p className="mb-6 text-sm leading-8">
                    {movie.overview.length < 200
                      ? movie.overview
                      : movie.overview.slice(0, 200).padEnd(205, '.....')}
                  </p>
                  <Button className="self-start" color="primary" size="large">
                    View Movie
                  </Button>
                </div>
                <div className="basis-1/4">
                  <Poster
                    src={`${imgURL}/${imgSize.medium}/${movie.posterPath}`}
                    title={movie.title}
                  />
                </div>
              </div>
            </li>
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
