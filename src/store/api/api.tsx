import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface PictureItem {
  id: string;
  image_id: string;
  artist_title: string;
  artwork_type_title: string;
  date_display: string;
  title: string;
  provenance_text: string;
}

interface ArtworksState {
  data: PictureItem[];
}

interface PictureItemById extends PictureItem {
  description: string;
  artist_display: string;
}

interface ArtworksStateByID {
  data: PictureItemById;
}

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.artic.edu/api/v1' }),
  endpoints: (builder) => ({
    getArtworks: builder.query({
      query: () => '/artworks?page=1&limit=13',
      transformResponse: (response: ArtworksState) => ({
        cards: response.data,
      }),
    }),
    getArtworkById: builder.query({
      query: (id) => `/artworks/${id}`,
      transformResponse: (response: ArtworksStateByID) => ({
        data: response.data,
      }),
    }),
    getArtworkBySearch: builder.query({
      query: (request) => `https://api.artic.edu/api/v1/artworks/search?q=${request}`,
      transformResponse: (response: ArtworksState) => ({
        cards: response.data,
      }),
    }),
  }),
});

export const { useGetArtworksQuery, useGetArtworkByIdQuery, useGetArtworkBySearchQuery } = api;
