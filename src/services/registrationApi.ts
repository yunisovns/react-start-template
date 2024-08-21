import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface SignUpBody {
  email: string;
  password: string;
}

interface AuthResult {
  token: string;
}

export const registrationApi = createApi({
  reducerPath: 'registrationApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://19429ba06ff2.vps.myjino.ru/api' }),
  endpoints: (builder) => ({
    registerUser: builder.mutation<AuthResult, SignUpBody>({
      query: (body) => ({
        url: '/signup',
        method: 'POST',
        body,
      }),
    }),
    loginUser: builder.mutation<AuthResult, SignUpBody>({
      query: (body) => ({
        url: '/signin',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useRegisterUserMutation } = registrationApi;
