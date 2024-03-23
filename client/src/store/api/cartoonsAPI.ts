import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MoviesPageResponse } from '../../utils/types';

const cartoonsApi = createApi({
  reducerPath: 'cartoons',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (builder) => {
    return {
      getCartoonsLists: builder.query<MoviesPageResponse, void>({
        query: () => {
          return {
            url: '/api/cartoons',
            method: 'GET',
          };
        },
      }),
    };
  },
});

export const { useGetCartoonsListsQuery } = cartoonsApi;
export { cartoonsApi };
