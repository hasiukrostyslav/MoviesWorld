import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { HomePageResponse } from '../../utils/types';

const generalApi = createApi({
  reducerPath: 'general',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),

  endpoints: (builder) => {
    return {
      getTrendList: builder.query<HomePageResponse, void>({
        query: () => {
          return {
            url: '/api',
            method: 'GET',
          };
        },
      }),
    };
  },
});

export const { useGetTrendListQuery } = generalApi;
export { generalApi };
