import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SearchResponse } from '../../utils/types';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const searchApi = createApi({
  reducerPath: 'search',
  baseQuery: fetchBaseQuery({ baseUrl: SERVER_URL }),
  endpoints: (builder) => {
    return {
      getSearchedItems: builder.query<SearchResponse, string>({
        query: (query) => {
          return {
            url: '/search',
            method: 'GET',
            params: { query },
          };
        },
      }),
    };
  },
});

export const { useGetSearchedItemsQuery } = searchApi;
export { searchApi };
