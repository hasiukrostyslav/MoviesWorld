import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SearchResponse } from '../../utils/types';

interface Params {
  query: string | null;
  searchId: number | string | null;
  type: string | null;
  remain: string | null;
}

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const searchApi = createApi({
  reducerPath: 'search',
  baseQuery: fetchBaseQuery({ baseUrl: SERVER_URL }),
  endpoints: (builder) => {
    return {
      getSearchedItems: builder.query<SearchResponse, Params>({
        query: ({ query, searchId, type, remain }) => {
          return {
            url: '/search',
            method: 'GET',
            params: { query, searchId, type, remain },
          };
        },
      }),
    };
  },
});

export const { useGetSearchedItemsQuery } = searchApi;
export { searchApi };
