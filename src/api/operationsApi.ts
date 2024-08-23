import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Operation {
  id?: string;
  name: string;
  desc?: string;
  amount: number;
  date: string;
  type: 'Profit' | 'Cost';
  categoryId: string;
  commandId: string;
}

export interface Operation2 {
  id?: string;
  name: string;
  desc?: string;
  amount: number;
  date: string;
  type: 'Profit' | 'Cost';
  category: {id:string};
  commandId: string;
}


interface Pagination {
  pageSize: number;
  pageNumber: number;
  total: number;
}

interface Sorting {
  type: 'ASC' | 'DESC';
  field: 'id' | 'createdAt' | 'updatedAt' | 'name';
}

interface GetOperationsResponse {
  data: Operation2[];
  pagination: Pagination;
  sorting: Sorting;
}

interface GetOperationByIdResponse {
  data: Operation;
}

interface CreateUpdateOperationParams {
  name: string;
  desc?: string;
  amount: number;
  date: string;
  type: 'Profit' | 'Cost';
  categoryId: string;
}

interface DeleteOperationResponse {
  data: Operation;
}

interface Filters {
  ids?: string[];
  name?: string;
  categoryIds?: string[];
  type?: 'Cost' | 'Profit';
  pagination?: {
    pageSize?: number;
    pageNumber?: number;
  };
  date?: {
    gte?: string;
    lte?: string;
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
const getToken = () => localStorage.getItem('token');

export const operationsApi = createApi({
  reducerPath: 'operationsApi',
    
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
    getOperations: builder.query<GetOperationsResponse, Filters>({
      query: (filters) => {
        const params = new URLSearchParams();

        if (filters.pagination) {
          params.append('pagination', JSON.stringify(filters.pagination));
        }
        if (filters.sorting) {
          params.append('sorting', JSON.stringify(filters.sorting));
        }
        if (filters.name) {
          params.append('name', filters.name);
        }
        if (filters.categoryIds) {
          params.append('categoryIds', JSON.stringify(filters.categoryIds));
        }
        if (filters.type) {
          params.append('type', filters.type);
        }
        if (filters.date) {
          params.append('date', JSON.stringify(filters.date));
        }
        if (filters.createdAt) {
          params.append('createdAt', JSON.stringify(filters.createdAt));
        }
        if (filters.updatedAt) {
          params.append('updatedAt', JSON.stringify(filters.updatedAt));
        }
        if (filters.ids) {
          params.append('ids', JSON.stringify(filters.ids));
        }

        return `operations?${params.toString()}`;
      },
    }),
    getOperationById: builder.query<GetOperationByIdResponse, string>({
      query: (id) => `operations/${id}`,
    }),
    createOperation: builder.mutation<Operation, CreateUpdateOperationParams>({
      query: (newOperation) => ({
        url: 'operations',
        method: 'POST',
        body: newOperation,
      }),
    }),
    updateOperation: builder.mutation<Operation, { id: string; operation: CreateUpdateOperationParams }>({
      query: ({ id, operation }) => ({
        url: `operations/${id}`,
        method: 'PUT',
        body: operation,
      }),
    }),
    deleteOperation: builder.mutation<DeleteOperationResponse, string>({
      query: (id) => ({
        url: `operations/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetOperationsQuery,
  useGetOperationByIdQuery,
  useCreateOperationMutation,
  useUpdateOperationMutation,
  useDeleteOperationMutation,
} = operationsApi;
