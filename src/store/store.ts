import { configureStore } from '@reduxjs/toolkit';
import financialOperationsReducer from '../widgets/OperationList/OperationsSlice';
import authReducer from './authSlice';

export const store = configureStore({
  reducer: {
    financialOperations: financialOperationsReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
