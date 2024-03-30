import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MovieCategoryResponse, MoviesPageResponse } from '../../utils/types';

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

      getTrendingMovies: builder.query<MovieCategoryResponse, number>({
        query: (page) => {
          return {
            url: '/api/trending/movies',
            method: 'GET',
            params: { page },
          };
        },
      }),
    };
  },
});

export const { useGetMoviesListsQuery, useGetTrendingMoviesQuery } = moviesApi;
export { moviesApi };
