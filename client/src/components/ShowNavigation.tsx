import useShowNavigation from '../hooks/useShowNavigation';
import PaginationButton from './PaginationButton';

interface ShowNavigationProps {
  numOfSeasons: number;
  numOfEpisodes?: number;
}

function ShowNavigation({ numOfSeasons, numOfEpisodes }: ShowNavigationProps) {
  const {
    seasons,
    episodes,
    selectSeason,
    selectEpisode,
    currentEpisode,
    currentSeason,
  } = useShowNavigation(numOfSeasons, numOfEpisodes);

  return (
    <div className="absolute bottom-8">
      <div className="mb-4 flex items-center gap-4">
        <h4 className="w-20 text-slate-400">Seasons:</h4>
        <ul className="flex gap-2">
          {seasons.map((season) => (
            <PaginationButton
              page={season}
              onClick={() => selectSeason(season)}
              outline
              disabled={season === currentSeason}
            />
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-4 ">
        <h4 className="w-20 text-slate-400">Episodes:</h4>
        {numOfEpisodes && (
          <ul className="flex gap-2">
            {episodes.map((episode) => (
              <PaginationButton
                page={episode}
                onClick={() => selectEpisode(episode)}
                outline
                disabled={episode === currentEpisode}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ShowNavigation;
