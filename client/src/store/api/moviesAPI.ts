import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MoviesPageResponse } from '../../utils/types';

const moviesApi = createApi({
  reducerPath: 'movies',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (builder) => {
    return {
      getMoviesLists: builder.query<MoviesPageResponse, void>({
        query: () => {
          return {
            url: '/api/movies',
            method: 'GET',
          };
        },
      }),
    };
  },
});

export const { useGetMoviesListsQuery } = moviesApi;
export { moviesApi };
