import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ResultTypes } from 'app/interfaces';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.unsplash.com/search/photos/?page=1&orientation=landscape&query=',
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<ResultTypes, string>({
      query: (quer: string) =>
        `${quer || 'nature'}&client_id=fQqz6U7P1FNyV9b74t3Yyf19ib3mAawCyd7aNYALAak`,
    }),
  }),
});

export const { useGetPostsQuery } = apiSlice;
