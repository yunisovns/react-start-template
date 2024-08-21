import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { createRandomOperation, Operation } from './createRandomProduct';

interface FinancialOperationsState {
  operations: Operation[];
}

const initialState: FinancialOperationsState = {
  operations: Array.from({ length: 5 }, () => createRandomOperation(new Date().toISOString())),
};

const financialOperationsSlice = createSlice({
  name: 'financialOperations',
  initialState,
  reducers: {
    addOperation: (state) => {
      state.operations.push(createRandomOperation(new Date().toISOString()));
    },
    removeOperation: (state, action: PayloadAction<string>) => {
      state.operations = state.operations.filter((operation) => operation.value.id !== action.payload);
    },
  },
});

export const { addOperation, removeOperation } = financialOperationsSlice.actions;

export default financialOperationsSlice.reducer;
