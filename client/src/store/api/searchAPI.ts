import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SearchResponse } from '../../utils/types';

interface Params {
  query: string | null;
  page: number | string;
  type: string | null;
}

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const searchApi = createApi({
  reducerPath: 'search',
  baseQuery: fetchBaseQuery({ baseUrl: SERVER_URL }),
  endpoints: (builder) => {
    return {
      getSearchedItems: builder.query<SearchResponse, Params>({
        query: ({ query, page, type }) => {
          return {
            url: '/search',
            method: 'GET',
            params: { query, page, type },
          };
        },
      }),
    };
  },
});

export const { useGetSearchedItemsQuery } = searchApi;
export { searchApi };
