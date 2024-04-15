import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
  MoviesPageResponse,
  ShowCategoryResponse,
<<<<<<< Updated upstream
=======
  ShowResponse,
  ShowSeasonResponse,
>>>>>>> Stashed changes
} from '../../utils/types';

interface ShowsByCategory {
  key: string | undefined;
  page: number;
}

interface Season {
  id: string | undefined;
  seasonId: string | undefined;
}

const showsApi = createApi({
  reducerPath: 'shows',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (builder) => {
    return {
      getShowsLists: builder.query<MoviesPageResponse, void>({
        query: () => {
          return {
            url: '/api/tv-shows',
            method: 'GET',
          };
        },
      }),

      getTrendingShows: builder.query<ShowCategoryResponse, number>({
        query: (page) => {
          return {
            url: '/api/trending/tv',
            method: 'GET',
            params: { page },
          };
        },
      }),

      getShowsByCategory: builder.query<ShowCategoryResponse, ShowsByCategory>({
        query: ({ key, page }) => {
          return {
            url: `/api/tv-shows/category/${key}`,
            method: 'GET',
            params: { page },
          };
        },
      }),
<<<<<<< Updated upstream
=======

      getShowById: builder.query<ShowResponse, string | undefined>({
        query: (id) => {
          return {
            url: `/api/view/tv/${id}`,
            method: 'GET',
            params: { id },
          };
        },
      }),

      getShowSeason: builder.query<ShowSeasonResponse, Season>({
        query: ({ id, seasonId }) => {
          return {
            url: `/api/view/tv/${id}/season/${seasonId}`,
            method: 'GET',
            params: { id, seasonId },
          };
        },
      }),
>>>>>>> Stashed changes
    };
  },
});

export const {
  useGetShowsListsQuery,
  useGetTrendingShowsQuery,
  useGetShowsByCategoryQuery,
<<<<<<< Updated upstream
=======
  useGetShowByIdQuery,
  useGetShowSeasonQuery,
>>>>>>> Stashed changes
} = showsApi;
export { showsApi };
