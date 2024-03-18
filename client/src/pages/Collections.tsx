import { useGetAllCollectionQuery } from '../store';
import Spinner from '../components/Spinner';
import ErrorPage from './ErrorPage';
import CollectionList from '../components/CollectionList';

function Collections() {
  const { data, isFetching, isError } = useGetAllCollectionQuery();

  if (isFetching && !data) return <Spinner />;
  if (isError) return <ErrorPage code={500} message="Internal Server Error" />;

  if (data) {
    const { data: collections, results: length } = data;

    return (
      <section>
        {collections.map((collection, i) => (
          <CollectionList
            key={collection.key}
            collection={collection}
            index={i}
            length={length}
          />
        ))}
      </section>
    );
  }
}

export default Collections;
