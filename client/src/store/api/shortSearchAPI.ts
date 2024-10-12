import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { SearchResponse } from '../../utils/types';

interface QueryParam {
  query: string;
}

interface CustomizedFetchBaseQueryError {
  status: number;
  data: {
    status: string;
    message: string;
  };
}

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const shortSearchApi = createApi({
  reducerPath: 'shortSearch',
  refetchOnMountOrArgChange: true,
  baseQuery: <
    BaseQueryFn<string | FetchArgs, unknown, CustomizedFetchBaseQueryError>
  >fetchBaseQuery({ baseUrl: SERVER_URL }),
  endpoints: (builder) => {
    return {
      getFastSearch: builder.query<SearchResponse, QueryParam>({
        query: ({ query }) => {
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

export const { useLazyGetFastSearchQuery, util } = shortSearchApi;
export { shortSearchApi };
