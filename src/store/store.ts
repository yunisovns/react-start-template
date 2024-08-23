import { configureStore } from '@reduxjs/toolkit';
import { categoriseApi } from '../api/categoriesApi';
import { categoriseApi2 } from '../api/categoriseApi2';
import { operationsApi } from '../api/operationsApi';
import { profileApi } from '../api/profileApi';
import { registrationApi } from '../api/registrationApi';
import financialOperationsReducer from '../widgets/OperationList/OperationsSlice';
import authReducer from './authSlice';

export const store = configureStore({
  reducer: {
    financialOperations: financialOperationsReducer,
    auth: authReducer,
    [registrationApi.reducerPath]: registrationApi.reducer,
    [operationsApi.reducerPath]: operationsApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
    [categoriseApi.reducerPath]: categoriseApi.reducer,
    [categoriseApi2.reducerPath]: categoriseApi2.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      registrationApi.middleware,
      operationsApi.middleware,
      profileApi.middleware,
      categoriseApi.middleware,
      categoriseApi2.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
