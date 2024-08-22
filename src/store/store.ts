import { configureStore } from '@reduxjs/toolkit';
import { operationsApi } from '../api/operationsApi';
import { registrationApi } from '../api/registrationApi';
import financialOperationsReducer from '../widgets/OperationList/OperationsSlice';
import authReducer from './authSlice';
import { apiSlice } from '../api/profileApi';

export const store = configureStore({
  reducer: {
    financialOperations: financialOperationsReducer,
    auth: authReducer,
    [registrationApi.reducerPath]: registrationApi.reducer,
    [operationsApi.reducerPath]: operationsApi.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(registrationApi.middleware, operationsApi.middleware,apiSlice.middleware ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
