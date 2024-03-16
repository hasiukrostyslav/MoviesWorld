import { useGetTrendListQuery } from '../store/api/generalAPI';
import Hero from '../components/Hero';
import Spinner from '../components/Spinner';
import ItemsList from '../components/ItemsList';
import ActorsList from '../components/ActorsList';

function Home() {
  const { data, isFetching, isError } = useGetTrendListQuery();

  if (isFetching && !data) return <Spinner />;
  if (isError) return 'Error';

  if (data) {
    const {
      trendingAll: { data: heroData },
      trendingMovies: { data: moviesData },
      trendingShows: { data: showsData },
      popularActors: { data: actorsData },
    } = data.data;

    return (
      <section>
        <Hero movies={heroData} />
        <ItemsList movies={moviesData} heading="Popular Movies" />
        <ItemsList movies={showsData} heading="Popular Shows" />
        <ActorsList actors={actorsData} heading="Popular Actors" />
      </section>
    );
  }
}

export default Home;
