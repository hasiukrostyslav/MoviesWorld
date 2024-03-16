import { ActorBaseData } from '../utils/types';
import ActorsCard from './ActorsCard';
import Button from './Button';

interface ItemsListProps {
  actors: ActorBaseData[];
  heading: string;
}

function ActorsList({ actors, heading }: ItemsListProps) {
  return (
    <div className="flex flex-col py-20">
      <h2 className="text-4xl font-semibold">{heading}</h2>
      <ul className="mb-8 mt-6 grid grid-cols-5 justify-between gap-y-16 px-4">
        {actors.map((item) => (
          <ActorsCard actor={item} key={item.id} />
        ))}
      </ul>
      <Button color="primary" size="large" className="mt-10 self-center">
        View All {heading}
      </Button>
    </div>
  );
}

export default ActorsList;
