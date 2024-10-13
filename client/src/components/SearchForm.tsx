import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SubmitHandler, useForm } from 'react-hook-form';
import { shortSearchApi, useLazyGetFastSearchQuery } from '../store';
import { useMatchTheme } from '../hooks/useMatchTheme';
import Icon from './Icon';
import MiniSpinner from './MiniSpinner';
import SearchedItem from './SearchedItem';
import Button from './Button';

type Input = {
  query: string;
};

function SearchForm() {
  const [isFocus, setIsFocus] = useState(false);
  const [queryStr, setQueryStr] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const match = useMatchTheme();
  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    trigger: triggerForm,
  } = useForm<Input>();
  const [trigger, result] = useLazyGetFastSearchQuery();
  const dispatch = useDispatch();

  const resetQuery = useCallback(() => {
    setIsFocus(false);
    reset();
    setQueryStr('');
    if (!location.pathname.includes('search'))
      dispatch(shortSearchApi.util.resetApiState());
  }, [dispatch, reset, location]);

  useEffect(() => {
    resetQuery();
  }, [location, resetQuery]);

  const { data, isError, isFetching } = result;
  const dataLength = data?.data.data.length;
  const items = data?.data.data.slice(0, 12);

  const leftPosition =
    items && items?.length > 6 && !isError && !isFetching
      ? '-left-72 grid-cols-2'
      : '-left-24';

  const onSubmit: SubmitHandler<Input> = (data) => {
    navigate(`search?query=${data.query}`);
    resetQuery();
    triggerForm('query', { shouldFocus: false });
    (document.activeElement as HTMLElement).blur();
  };

  return (
    <>
      <form
        autoComplete="off"
        className="relative z-50"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          onClick={() => setIsFocus(true)}
          placeholder="Search here"
          type="text"
          className={`outline-round border-2 border-slate-300 py-2 pl-7 pr-10 text-sm focus:border-transparent dark:border-transparent  ${match ? 'border-transparent bg-slate-600 text-slate-200' : 'dark:bg-slate-600'}`}
          {...register('query', {
            required: true,
            minLength: 3,
            onChange(e) {
              setQueryStr(e.target.value);
              if (e.target.value.length > 2)
                trigger({
                  query: e.target.value,
                });
            },
          })}
        />
        <Icon
          name="search"
          className={`absolute left-2 top-3 ${match ? 'text-slate-200' : 'text-slate-400 dark:text-slate-200'}`}
        />
        <button
          onClick={() => {
            setFocus('query');
            reset();
            dispatch(shortSearchApi.util.resetApiState());
          }}
          type="button"
          className={`outline-round absolute right-1 top-1 p-2 ${match ? 'text-slate-200' : 'text-slate-400 dark:text-slate-200'}`}
        >
          <Icon name="close" />
        </button>
        {isFocus &&
          createPortal(
            <div
              onClick={() => resetQuery()}
              className="fixed left-0 top-0 z-20 h-screen w-screen bg-slate-400 opacity-80 dark:bg-slate-900"
            ></div>,
            document.body,
          )}
      </form>
      {isFocus &&
        result.status !== 'uninitialized' &&
        result.originalArgs?.query &&
        queryStr.length > 2 && (
          <div
            className={`absolute ${leftPosition} top-14 z-30 ${!isError && !isFetching ? 'grid auto-rows-max gap-x-10 gap-y-4' : 'flex min-h-40 min-w-96  items-center justify-center p-2 text-lg dark:text-slate-400'} rounded-md bg-slate-200 p-6 dark:bg-slate-800`}
          >
            {items &&
              !isFetching &&
              !isError &&
              items.map((el) => <SearchedItem key={el.id} item={el} />)}

            {isError && (
              <div className="flex w-96 flex-col items-center gap-1">
                <p>No data was found</p>
                <span className="text-base text-slate-500">
                  Please try again!
                </span>
              </div>
            )}
            {isFetching && <MiniSpinner />}
            {dataLength && dataLength > 12 && !isFetching && !isError && (
              <Button
                onClick={() => {
                  navigate(`search?query=${result.originalArgs?.query}`);
                  resetQuery();
                }}
                className="col-start-2 mt-2 justify-self-end"
                color="primary"
                size="small"
              >
                Get all results
              </Button>
            )}
          </div>
        )}
    </>
  );
}

export default SearchForm;
