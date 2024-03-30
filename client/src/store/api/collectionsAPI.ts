import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CollectionsList, CollectionsPageResponse } from '../../utils/types';

const collectionsApi = createApi({
  reducerPath: 'collections',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (builder) => {
    return {
      getAllCollection: builder.query<CollectionsPageResponse, void>({
        query: () => {
          return {
            url: '/api/collections',
            method: 'GET',
          };
        },
      }),

      getCollection: builder.query<CollectionsList, string | undefined>({
        query: (id) => {
          return {
            url: `/api/collections/${id}`,
            method: 'GET',
          };
        },
      }),
    };
  },
});

export const { useGetAllCollectionQuery, useGetCollectionQuery } =
  collectionsApi;
export { collectionsApi };
