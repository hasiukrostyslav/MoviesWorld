<<<<<<< Updated upstream
import type { Movie } from '../utils/types';
import InfoItem from './InfoItem';

interface InfoSidebarProps {
  movie: Movie;
=======
import { createMoviesInfoList } from '../utils/helper';
import type { Movie, Show, ShowSeason } from '../utils/types';
import InfoItem from './InfoItem';

interface InfoSidebarProps {
  movie: Movie | Show | ShowSeason;
>>>>>>> Stashed changes
}

function InfoSidebar({ movie }: InfoSidebarProps) {
  return (
    <aside className="mt-12 basis-2/12">
      <InfoItem title="Release Date" data={movie.releaseDate} />
      <InfoItem title="Status" data={movie.status} />
      <InfoItem title="Rating" data={movie.rating} />
      <InfoItem title="Genres" data={movie.genres} />
      <InfoItem title="Budget" data={movie.budget} />
      <InfoItem title="Revenue" data={movie.revenue} />
      <InfoItem title="Runtime" data={movie.runtime} />
      <InfoItem title="Countries" data={movie.countries} />
      <InfoItem title="Languages" data={movie.languages} />
    </aside>
  );
}

export default InfoSidebar;
