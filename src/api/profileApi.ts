import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type Profile = {
  id: string;
  name: string;
  email: string;
  signUpDate: string; // Изменил на строку для упрощения сериализации
  commandId: string;
};

const getToken = () => localStorage.getItem('token');

export const apiSlice = createApi({
  reducerPath: 'api',
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
    getProfile: builder.query<Profile, void>({
      query: () => '/profile',
    }),
  }),
});

export const { useGetProfileQuery } = apiSlice;
