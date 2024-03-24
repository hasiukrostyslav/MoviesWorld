import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { ActorsPageResponse } from '../../utils/types';

type PageParam = number;

const actorsApi = createApi({
  reducerPath: 'actors',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (builder) => {
    return {
      getActorsList: builder.query<ActorsPageResponse, PageParam>({
        query: (page) => {
          return {
            url: 'api/actors',
            method: 'GET',
            params: {
              page,
            },
          };
        },
      }),
    };
  },
});

export const { useGetActorsListQuery } = actorsApi;
export { actorsApi };
