import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { ActorsPageResponse } from '../../utils/types';

const actorsApi = createApi({
  reducerPath: 'actors',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (builder) => {
    return {
      getActorsList: builder.query<ActorsPageResponse, void>({
        query: () => {
          return {
            url: 'api/actors',
            method: 'GET',
          };
        },
      }),
    };
  },
});

export const { useGetActorsListQuery } = actorsApi;
export { actorsApi };
