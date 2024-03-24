import type { HeroBaseData } from '../utils/types';
import HeroItem from './HeroItem';
import SliderButton from './SliderButton';
import useSlider from '../hooks/useSlider';

interface HeroProps {
  movies: HeroBaseData[];
}

function Hero({ movies }: HeroProps) {
  const { currentMovie, nextMovie, prevMovie } = useSlider(movies, 3000);

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
        <SliderButton onClick={prevMovie} direction="prev" />
        <SliderButton onClick={nextMovie} direction="next" />
      </div>
    </>
  );
}

export default Hero;
