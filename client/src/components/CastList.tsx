import ActorsCard from './ActorsCard';
import Pagination from './Pagination';
import { ActorBaseData } from '../utils/types';
import useStaticPagination from '../hooks/useStaticPagination';

interface CastListProps {
  cast: ActorBaseData[];
}

function CastList({ cast }: CastListProps) {
  const { currentPage, totalPages, itemsPerPage } = useStaticPagination(cast);

  return (
    <div className="flex basis-10/12 flex-col">
      <h2 className="mb-5 text-3xl">Cast</h2>
      <ul
        className={`flex flex-wrap gap-5 ${totalPages > 1 ? 'h-[43rem]' : ''}`}
      >
        {cast.map((actor, i) => (
          <ActorsCard
            key={actor.id}
            actor={actor}
            cast
            className={
              i < itemsPerPage * currentPage &&
              i >= itemsPerPage * (currentPage - 1)
                ? ''
                : 'hidden'
            }
          />
        ))}
      </ul>
      {totalPages > 1 && (
        <Pagination currentPage={currentPage} totalPages={totalPages} />
      )}
    </div>
  );
}

export default CastList;
