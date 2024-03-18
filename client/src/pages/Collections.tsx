import { useGetAllCollectionQuery } from '../store';
import Spinner from '../components/Spinner';
import ErrorPage from './ErrorPage';
import CollectionList from '../components/CollectionList';

enum Headers {
  hp = 'Harry Potter Universe',
  lor = 'Lord Of The Rings',
  marvel = 'Marvel Universe',
  dc = 'DC Universe',
  starWars = 'Star Wars Collection',
  jb007 = 'James Bond Collection',
}

function Collections() {
  const { data, isFetching, isError } = useGetAllCollectionQuery();

  if (isFetching && !data) return <Spinner />;
  if (isError) return <ErrorPage code={500} message="Internal Server Error" />;

  if (data) {
    const { hp, lotr, marvel, dc, starWars, jb007 } = data.data;

    return (
      <section>
        <CollectionList logoName="hp" collection={hp} heading={Headers.hp} />
        <CollectionList
          logoName="lotr"
          collection={lotr}
          heading={Headers.lor}
        />
        <CollectionList
          logoName="marvel"
          collection={marvel}
          heading={Headers.marvel}
        />
        <CollectionList logoName="dc" collection={dc} heading={Headers.dc} />
        <CollectionList
          logoName="starWars"
          collection={starWars}
          heading={Headers.starWars}
        />
        <CollectionList
          logoName="jb007"
          collection={jb007}
          heading={Headers.jb007}
          className="pb-20"
        />
      </section>
    );
  }
}

export default Collections;
