import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Category {
  id: string;
  name: string;
  photo?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Pagination {
  pageSize: number;
  pageNumber: number;
  total: number;
}

export interface Filters {
  name?: string;
  ids?: string[];
  pagination?: {
    pageSize?: number;
    pageNumber?: number;
  };
  createdAt?: {
    gte?: string;
    lte?: string;
  };
  updatedAt?: {
    gte?: string;
    lte?: string;
  };
  sorting?: {
    type: 'ASC' | 'DESC';
    field: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'date';
  };
}

export interface CategoryResponse {
  data: Category[];
  pagination: Pagination;
  sorting: {
    type: 'ASC' | 'DESC';
    field: 'id' | 'createdAt' | 'updatedAt' | 'name';
  };
}

const getToken = () => localStorage.getItem('token');

export const categoriseApi2 = createApi({
  reducerPath: 'categoriesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://19429ba06ff2.vps.myjino.ru/api',
    prepareHeaders: (headers) => {
      const token = getToken();
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCategories: builder.query<CategoryResponse, Filters>({
      query: (filters) => {
        const searchParams = new URLSearchParams();
        if (filters.name) searchParams.append('name', filters.name);
        if (filters.ids) searchParams.append('ids', JSON.stringify(filters.ids));
        if (filters.pagination) searchParams.append('pagination', JSON.stringify(filters.pagination));
        if (filters.createdAt) searchParams.append('createdAt', JSON.stringify(filters.createdAt));
        if (filters.updatedAt) searchParams.append('updatedAt', JSON.stringify(filters.updatedAt));
        if (filters.sorting) searchParams.append('sorting', JSON.stringify(filters.sorting));

        return `categories?${searchParams.toString()}`;
      },
    }),
    createCategory: builder.mutation<Category, Partial<Category>>({
      query: (category) => ({
        url: 'categories',
        method: 'POST',
        body: category,
      }),
    }),
    deleteCategory: builder.mutation<void, string>({
      query: (id) => ({
        url: `categories/${id}`,
        method: 'DELETE',
      }),
    }),
    updateCategory: builder.mutation<Category, { id: string; category: Partial<Category> }>({
      query: ({ id, category }) => ({
        url: `categories/${id}`,
        method: 'PUT',
        body: category,
      }),
    }),
    patchCategory: builder.mutation<Category, { id: string; category: Partial<Category> }>({
      query: ({ id, category }) => ({
        url: `categories/${id}`,
        method: 'PATCH',
        body: category,
      }),
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useCreateCategoryMutation,
  useDeleteCategoryMutation,
  useUpdateCategoryMutation,
  usePatchCategoryMutation,
} = categoriseApi2;
