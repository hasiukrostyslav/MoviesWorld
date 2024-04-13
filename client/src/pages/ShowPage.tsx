import { createPortal } from 'react-dom';
import { useParams } from 'react-router-dom';
import { useGetShowByIdQuery } from '../store';
import { useVideoFrame } from '../hooks/useVideoFrame';
import Spinner from '../components/Spinner';
import ErrorPage from './ErrorPage';
import FrameOverlay from '../components/FrameOverlay';
import MovieHero from '../components/MovieHero';
import CastList from '../components/CastList';
import InfoSidebar from '../components/InfoSidebar';

function ShowPage() {
  const params = useParams();
  const { id } = params;
  const { data, isFetching, isError } = useGetShowByIdQuery(id);
  const { isOpenFrame, openVideoFrame, closeVideoFrame } = useVideoFrame();

  if (isFetching && !data) return <Spinner />;
  if (isError) return <ErrorPage code={500} message="Internal Server Error" />;

  if (data) {
    const show = data.data;

    return (
      <section className="mb-10">
        {isOpenFrame &&
          createPortal(
            <FrameOverlay onClick={closeVideoFrame} />,
            document.body,
          )}

        <MovieHero
          movie={show}
          isOpenFrame={isOpenFrame}
          openVideoFrame={openVideoFrame}
        />

        <section className="my-5 flex justify-between gap-10">
          <CastList cast={show.cast} />
          <InfoSidebar movie={show} />
        </section>
      </section>
    );
  }
}

export default ShowPage;
