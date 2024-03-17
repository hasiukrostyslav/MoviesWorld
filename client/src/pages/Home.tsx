import { useGetTrendListQuery } from '../store';
import Hero from '../components/Hero';
import Spinner from '../components/Spinner';
import ItemsList from '../components/ItemsList';
import ActorsList from '../components/ActorsList';

function Home() {
  const { data, isFetching, isError } = useGetTrendListQuery();

  if (isFetching && !data) return <Spinner />;
  if (isError) return 'Error';

  if (data) {
    const { trendingAll, trendingMovies, trendingShows, popularActors } =
      data.data;

    return (
      <section>
        <Hero movies={trendingAll} />
        <ItemsList
          movies={trendingMovies}
          heading="Popular Movies"
          listLength="long"
        />
        <ItemsList
          movies={trendingShows}
          heading="Popular Shows"
          listLength="long"
        />
        <ActorsList
          actors={popularActors}
          heading="Popular Actors"
          className="pb-20"
        />
      </section>
    );
  }
}

export default Home;
