import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { ActorResponse, ActorsPageResponse } from '../../utils/types';

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

      getActor: builder.query<ActorResponse, string | undefined>({
        query: (id) => {
          return {
            url: `api/view/actor/${id}`,
            method: 'GET',
            params: { id },
          };
        },
      }),
    };
  },
});

export const { useGetActorsListQuery, useGetActorQuery } = actorsApi;
export { actorsApi };
