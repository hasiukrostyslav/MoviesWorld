import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { SearchResponse } from '../../utils/types';

interface SearchParams {
  query: string;
  searchId: number | string | null | undefined;
  type: string | null | undefined;
  remain: string | null | undefined;
}

interface CustomizedFetchBaseQueryError {
  status: number;
  data: {
    status: string;
    message: string;
  };
}

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const searchApi = createApi({
  reducerPath: 'search',

  baseQuery: <
    BaseQueryFn<string | FetchArgs, unknown, CustomizedFetchBaseQueryError>
  >fetchBaseQuery({ baseUrl: SERVER_URL }),
  endpoints: (builder) => {
    return {
      getSearchedItems: builder.query<SearchResponse, SearchParams>({
        query: ({ query, searchId, type, remain }) => {
          return {
            url: '/search',
            method: 'GET',
            params: { query, searchId, type, remain },
          };
        },
        serializeQueryArgs: ({ endpointName }) => {
          return endpointName;
        },
        merge: (currentCache, newItems, otherArgs) => {
          const { searchId } = otherArgs.arg;

          if (!searchId) return newItems;

          currentCache.data.page = newItems.data.page;
          currentCache.data.results = newItems.data.results;
          currentCache.data.resultPerPage = newItems.data.resultPerPage;
          currentCache.data.data = [
            ...currentCache.data.data,
            ...newItems.data.data,
          ];
        },
        forceRefetch({ currentArg, previousArg }) {
          return currentArg !== previousArg;
        },
      }),
    };
  },
});

export const { useGetSearchedItemsQuery, useLazyGetSearchedItemsQuery, util } =
  searchApi;
export { searchApi };
