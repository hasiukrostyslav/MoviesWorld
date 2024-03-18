import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CollectionsPageResponse } from '../../utils/types';

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
    };
  },
});

export const { useGetAllCollectionQuery } = collectionsApi;
export { collectionsApi };
