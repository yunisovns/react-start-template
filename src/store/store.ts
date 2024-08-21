import { operationsApi } from './../services/operationsApi';
import { configureStore } from '@reduxjs/toolkit';
import financialOperationsReducer from '../widgets/OperationList/OperationsSlice';
import authReducer from './authSlice';
import { registrationApi } from '../services/registrationApi';

export const store = configureStore({
  reducer: {
    financialOperations: financialOperationsReducer,
    auth: authReducer,
    [registrationApi.reducerPath]: registrationApi.reducer,
    [operationsApi.reducerPath]: operationsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(registrationApi.middleware, operationsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
