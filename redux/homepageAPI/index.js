import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const homepageApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_PUBLICBASE_URL,
  }),
  endpoints: (builder) => ({
    fetchHomepageData: builder.query({
      query: () => ({
        url: '/homepage',
      }),
    }),
  }),
});

export const { useFetchHomepageDataQuery } = homepageApi;
