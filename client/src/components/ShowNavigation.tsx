import { useRef, useState } from 'react';
import useShowNavigation from '../hooks/useShowNavigation';
import PaginationButton from './PaginationButton';
import useMaxWidth from '../hooks/useMaxWidth';

interface ShowNavigationProps {
  numOfSeasons: number;
  numOfEpisodes?: number | null;
}

function ShowNavigation({ numOfSeasons, numOfEpisodes }: ShowNavigationProps) {
  const [translateS, setTranslateS] = useState(0);
  const [translateE, setTranslateE] = useState(0);
  const divRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const { maxWidth, containerWidth } = useMaxWidth(divRef, headingRef);
  const {
    seasons,
    episodes,
    selectSeason,
    selectEpisode,
    currentEpisode,
    currentSeason,
    maxPages,
  } = useShowNavigation(numOfSeasons, numOfEpisodes);

  const prevSeasonPage = () => {
    setTranslateS((t) => t + 100);
  };
  const nextSeasonPage = () => setTranslateS((t) => t - 100);

  const prevEpisodePage = () => {
    setTranslateE((t) => t + 100);
  };
  const nextEpisodePage = () => {
    setTranslateE((t) => t - 100);
  };

  return (
    <div ref={divRef} className="relative mb-10 w-full">
      <div className="mb-4 flex w-full items-center">
        <h4 ref={headingRef} className="min-w-20 text-slate-400">
          Seasons:
        </h4>

        <div
          className={`flex max-w-[${containerWidth}] items-center overflow-hidden`}
        >
          {numOfSeasons >= maxPages && (
            <PaginationButton
              prev
              dark
              className="shrink-0"
              onClick={prevSeasonPage}
              disabled={translateS === 0}
            />
          )}

          <ul
            className={`${numOfSeasons >= maxPages && 'mx-2'}  flex  max-w-[${maxWidth}] gap-2 overflow-hidden`}
          >
            {seasons.map((season) => (
              <PaginationButton
                key={season}
                page={season}
                onClick={() => selectSeason(season)}
                outline
                disabled={season === currentSeason}
                className={`shrink-0 translate-x-[${translateS}%] ${
                  season === currentSeason
                    ? 'border-slate-700 text-slate-700'
                    : ''
                }`}
              />
            ))}
          </ul>

          {numOfSeasons >= maxPages && (
            <PaginationButton
              next
              dark
              className="shrink-0"
              onClick={nextSeasonPage}
            />
          )}
        </div>
      </div>

      {numOfEpisodes && (
        <div className="flex items-center">
          <h4 className="min-w-20 text-slate-400">Episodes:</h4>

          <div
            className={`flex max-w-[${containerWidth}] items-center overflow-hidden`}
          >
            {numOfEpisodes >= maxPages && (
              <PaginationButton
                prev
                dark
                className="shrink-0"
                disabled={translateE === 0}
                onClick={prevEpisodePage}
              />
            )}

            <ul
              className={`${numOfEpisodes >= maxPages && 'mx-2'} relative flex max-w-[${maxWidth}]  gap-2 overflow-hidden`}
            >
              {episodes.map((episode) => (
                <PaginationButton
                  key={episode}
                  page={episode}
                  onClick={() => selectEpisode(episode)}
                  outline
                  disabled={episode === currentEpisode}
                  className={`shrink-0 translate-x-[${translateE}%] ${
                    episode === currentSeason
                      ? 'border-slate-700 text-slate-700'
                      : ''
                  }`}
                />
              ))}
            </ul>

            {numOfEpisodes >= maxPages && (
              <PaginationButton
                next
                dark
                className="shrink-0"
                onClick={nextEpisodePage}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default ShowNavigation;
