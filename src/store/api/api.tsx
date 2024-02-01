import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IArtworksStateByID, IArtworksState } from '../../types/types';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.artic.edu/api/v1' }),
  endpoints: (builder) => ({
    getArtworks: builder.query({
      query: () => '/artworks?page=1&limit=13',
      transformResponse: (response: IArtworksState) => ({
        cards: response.data,
      }),
    }),
    getArtworkById: builder.query({
      query: (id) => `/artworks/${id}`,
      transformResponse: (response: IArtworksStateByID) => ({
        data: response.data,
      }),
    }),
    getArtworkBySearch: builder.query({
      query: (request) => `https://api.artic.edu/api/v1/artworks/search?q=${request}`,
      transformResponse: (response: IArtworksState) => ({
        cards: response.data,
      }),
    }),
  }),
});

export const { useGetArtworksQuery, useGetArtworkByIdQuery, useGetArtworkBySearchQuery } = api;
