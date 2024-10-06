import type { ActorBaseData } from '../utils/types';
import ActorsCard from './ActorsCard';
import ButtonLink from './ButtonLink';

interface ItemsListProps {
  actors: ActorBaseData[];
  heading: string;
  className?: string;
}

function ActorsList({ actors, heading, className }: ItemsListProps) {
  console.log(actors);
  return (
    <div className={`${className} flex flex-col pt-20`}>
      <h2 className="text-3xl font-semibold">{heading}</h2>
      <ul className="mb-8 mt-6 grid grid-cols-5 justify-items-center gap-y-16">
        {actors.map((item) => (
          <ActorsCard actor={item} key={item.id} className="w-48" />
        ))}
      </ul>

      <ButtonLink
        path="/actors"
        color="primary"
        size="large"
        className="mt-10 self-center"
      >
        View All {heading}
      </ButtonLink>
    </div>
  );
}

export default ActorsList;
