import ActorsCard from '../components/ActorsCard';
import Spinner from '../components/Spinner';
import { useGetActorsListQuery } from '../store';
import ErrorPage from './ErrorPage';

function Actors() {
  const { data, isFetching, isError } = useGetActorsListQuery();

  if (isFetching && !data) return <Spinner />;
  if (isError) return <ErrorPage code={500} message="Internal Server Error" />;

  if (data) {
    const actors = data.data;
    console.log(actors);

    return (
      <section className="flex flex-col pt-20">
        <h2 className="text-3xl font-semibold">Popular Actors</h2>
        <ul className="mb-8 mt-6 grid grid-cols-5 justify-between gap-y-16 px-4">
          {actors.map((actor) => (
            <ActorsCard actor={actor} key={actor.id} />
          ))}
        </ul>
      </section>
    );
  }
}

export default Actors;
