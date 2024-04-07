import { useParams } from 'react-router-dom';
import { useGetMovieByIdQuery } from '../store';
import MovieHero from '../components/MovieHero';
import ErrorPage from './ErrorPage';
import Spinner from '../components/Spinner';
import useVideoFrame from '../hooks/useVideoFrame';
import FrameOverlay from '../components/FrameOverlay';
import { createPortal } from 'react-dom';
import CastList from '../components/CastList';
import InfoSidebar from '../components/InfoSidebar';

function MoviePage() {
  const params = useParams();
  const { id } = params;
  const { data, isFetching, isError } = useGetMovieByIdQuery(id);
  const { isOpenFrame, openVideoFrame, closeVideoFrame } = useVideoFrame();

  if (isFetching && !data) return <Spinner />;
  if (isError) return <ErrorPage code={500} message="Internal Server Error" />;

  if (data) {
    const movie = data.data;

    return (
      <section>
        {isOpenFrame &&
          createPortal(
            <FrameOverlay onClick={closeVideoFrame} />,
            document.body,
          )}

        <MovieHero
          movie={movie}
          isOpenFrame={isOpenFrame}
          openVideoFrame={openVideoFrame}
        />

        <section className="my-5 flex justify-between gap-10">
          <CastList cast={movie.cast} />
          <InfoSidebar movie={movie} />
        </section>
      </section>
    );
  }
}

export default MoviePage;
