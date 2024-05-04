import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_PUBLICBASE_URL,
  }),
  endpoints: (builder) => ({
    getCategory: builder.query({
      query: (category) => `products/category?q=${category}`,
    }),
  }),
});

export const { useGetCategoryQuery } = productApi;
