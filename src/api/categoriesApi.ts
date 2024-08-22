import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Category {
  id: string;
  name: string;
}

interface GetCategoriesResponse {
  data: Category[];
  pagination: {
    pageSize: number;
    pageNumber: number;
    total: number;
  };
}

export const categoriseApi = createApi({
  reducerPath: 'categoriseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://19429ba06ff2.vps.myjino.ru/api',
  }),
  endpoints: (builder) => ({
    getCategories: builder.query<GetCategoriesResponse, void>({
      query: () => {
        const params = new URLSearchParams({
          pagination: JSON.stringify({ pageSize: 100, pageNumber: 1 }),
          sorting: JSON.stringify({ type: 'ASC', field: 'name' }),
        });
        return `categories?${params.toString()}`;
      },
    }),
  }),
});

export const { useGetCategoriesQuery } = categoriseApi;
