import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type Profile = {
  id: string;
  name: string;
  email: string;
  signUpDate: string;
  commandId: string;
};

export type UpdateProfileBody = {
  name: string;
};

export type ChangePasswordBody = {
  password: string;
  newPassword: string;
};

export type ChangePasswordResult = {
  success: boolean;
};

const getToken = () => localStorage.getItem('token');

export const profileApi = createApi({
  reducerPath: 'profileApi',
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
    updateProfile: builder.mutation<Profile, UpdateProfileBody>({
      query: (body) => ({
        url: '/profile',
        method: 'PATCH',
        body,
      }),
    }),
    changePassword: builder.mutation<ChangePasswordResult, ChangePasswordBody>({
      query: (body) => ({
        url: '/profile/change-password',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useGetProfileQuery, useUpdateProfileMutation, useChangePasswordMutation } = profileApi;
