import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MovieCategoryResponse, MoviesPageResponse } from '../../utils/types';

interface MoviesByCategory {
  key: string | undefined;
  page: number;
}

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

      getMoviesByCategory: builder.query<
        MovieCategoryResponse,
        MoviesByCategory
      >({
        query: ({ key, page }) => {
          return {
            url: `/api/movies/category/${key}`,
            method: 'GET',
            params: { page },
          };
        },
      }),
    };
  },
});

export const {
  useGetMoviesListsQuery,
  useGetTrendingMoviesQuery,
  useGetMoviesByCategoryQuery,
} = moviesApi;
export { moviesApi };
