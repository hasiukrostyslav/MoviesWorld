import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  CartoonsCategoryResponse,
  CartoonsPageResponse,
} from '../../utils/types';

interface CartoonsByCategory {
  key: string | undefined;
  type: string | undefined;
  page: number;
}

const cartoonsApi = createApi({
  reducerPath: 'cartoons',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (builder) => {
    return {
      getCartoonsLists: builder.query<CartoonsPageResponse, void>({
        query: () => {
          return {
            url: '/api/cartoons',
            method: 'GET',
          };
        },
      }),

      getCartoonsByCategory: builder.query<
        CartoonsCategoryResponse,
        CartoonsByCategory
      >({
        query: ({ key, type, page }) => {
          return {
            url: `/api/cartoons/category/${type}/${key}`,
            method: 'GET',
            params: { page },
          };
        },
      }),
    };
  },
});

export const { useGetCartoonsListsQuery, useGetCartoonsByCategoryQuery } =
  cartoonsApi;
export { cartoonsApi };
