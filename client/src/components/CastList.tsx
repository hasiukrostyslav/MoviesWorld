import { useSearchParams } from 'react-router-dom';
import ActorsCard from './ActorsCard';
import Pagination from './Pagination';
import { ActorBaseData } from '../utils/types';

interface CastListProps {
  cast: ActorBaseData[];
}

function CastList({ cast }: CastListProps) {
  const [searchParams] = useSearchParams();
  const ITEMS_PER_PAGE = 10;
  const page = searchParams.get('page') || 1;
  const totalPages = Math.ceil(cast.length / ITEMS_PER_PAGE);
  console.log(cast.length);
  return (
    <div className="flex basis-10/12 flex-col">
      <h2 className="mb-5 text-3xl">Cast</h2>
      <ul className="flex h-[43rem] flex-wrap gap-5">
        {cast.map((actor, i) => (
          <ActorsCard
            key={actor.id}
            actor={actor}
            cast
            className={
              i < ITEMS_PER_PAGE * +page && i >= ITEMS_PER_PAGE * (+page - 1)
                ? ''
                : 'hidden'
            }
          />
        ))}
      </ul>
      <Pagination currentPage={+page} totalPages={totalPages} />
    </div>
  );
}

export default CastList;
