import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
  MoviesPageResponse,
  ShowCategoryResponse,
  ShowEpisodeResponse,
  ShowResponse,
  ShowSeasonResponse,
} from '../../utils/types';

interface ShowsByCategory {
  key: string | undefined;
  page: number;
}

interface Season {
  id: string | undefined;
  seasonId: string | undefined;
}

interface Episode extends Season {
  episodeId: string | undefined;
}

const showsApi = createApi({
  reducerPath: 'shows',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (builder) => {
    return {
      getShowsLists: builder.query<MoviesPageResponse, void>({
        query: () => {
          return {
            url: '/api/tv',
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
            url: `/api/tv/category/${key}`,
            method: 'GET',
            params: { page },
          };
        },
      }),

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

      getShowEpisode: builder.query<ShowEpisodeResponse, Episode>({
        query: ({ id, seasonId, episodeId }) => {
          return {
            url: `/api/view/tv/${id}/season/${seasonId}/episode/${episodeId}`,
            method: 'GET',
            params: { id, seasonId, episodeId },
          };
        },
      }),
    };
  },
});

export const {
  useGetShowsListsQuery,
  useGetTrendingShowsQuery,
  useGetShowsByCategoryQuery,
  useGetShowByIdQuery,
  useGetShowSeasonQuery,
  useGetShowEpisodeQuery,
} = showsApi;
export { showsApi };
