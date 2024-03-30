import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
  MoviesPageResponse,
  ShowCategoryResponse,
} from '../../utils/types';

const showsApi = createApi({
  reducerPath: 'shows',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (builder) => {
    return {
      getShowsLists: builder.query<MoviesPageResponse, void>({
        query: () => {
          return {
            url: '/api/tv-shows',
            method: 'GET',
          };
        },
      }),

      getTrendingShows: builder.query<ShowCategoryResponse, number>({
        query: (page) => {
          return {
            url: '/api/trending/tv',
            method: 'GET',
            params: { page },
          };
        },
      }),
    };
  },
});

export const { useGetShowsListsQuery, useGetTrendingShowsQuery } = showsApi;
export { showsApi };
