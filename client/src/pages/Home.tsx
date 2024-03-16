import { useGetTrendListQuery } from '../store/api/generalAPI';
import Hero from '../components/Hero';
import Spinner from '../components/Spinner';

function Home() {
  const { data, isFetching, isError } = useGetTrendListQuery();

  if (isFetching && !data) return <Spinner />;
  if (isError) return 'Error';

  if (data) {
    const {
      trendingAll: { data: heroData },
      trendingMovies: { data: MoviesData },
      trendingShows: { data: showsData },
      popularActors: { data: actorsData },
    } = data.data;

    return (
      <section>
        <Hero movies={heroData} />
      </section>
    );
  }
}

export default Home;
