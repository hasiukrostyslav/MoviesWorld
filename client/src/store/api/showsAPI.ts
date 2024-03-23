import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { MoviesPageResponse } from '../../utils/types';

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
    };
  },
});

export const { useGetShowsListsQuery } = showsApi;
export { showsApi };
