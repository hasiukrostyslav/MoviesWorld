import { useNavigate } from 'react-router-dom';
import { useGetSearchedItemsQuery } from '../store';
import { useSearchTabs } from '../hooks/useSearchTabs';
import ActorsCard from './ActorsCard';
import MoviesCard from './MoviesCard';
import Button from './Button';
import Spinner from './Spinner';
import Error from './Error';

function SearchedList() {
  const navigate = useNavigate();
  const {
    params: { query, type, searchId, remain },
    searchString,
  } = useSearchTabs();

  const { data, isFetching, isError, error } = useGetSearchedItemsQuery({
    query,
    searchId,
    type,
    remain,
  });

  if (isFetching && !data) return <Spinner />;

  if (isError) {
    return 'data' in error ? (
      <Error
        code={error.status}
        message={error.data.message}
        pageType="outer"
        className="m-7"
      />
    ) : (
      <Error code={500} message="Something went wrong" pageType="outer" />
    );
  }

  if (data) {
    const {
      data: searchedData,
      page,
      totalPages,
      results,
      resultPerPage,
    } = data.data;

    return (
      <div className="flex flex-col">
        <ul className="mb-32 mt-6 grid grid-cols-5 justify-items-center gap-y-16 px-4">
          {searchedData.map((item) => {
            if ('type' in item) return <MoviesCard item={item} key={item.id} />;
            if ('character' in item)
              return (
                <ActorsCard actor={item} key={item.id} className="min-w-44" />
              );
          })}
        </ul>
        {(page < totalPages || results > resultPerPage) && (
          <Button
            size="large"
            color="primary"
            className="self-center"
            onClick={() => {
              console.log(results - resultPerPage);
              navigate(
                `?${searchString}&searchId=${results > resultPerPage ? page : page + 1}${results > resultPerPage ? `&remain=${results - resultPerPage}` : ''}`,
              );
            }}
          >
            Get more results
          </Button>
        )}
      </div>
    );
  }
}

export default SearchedList;
