import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  token: string | null;
  isInitialized: boolean;
  profile: { name: string; email: string } | null;
}

const initialState: AuthState = {
  token: localStorage.getItem('token') || null,
  isInitialized: false,
  profile: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string | null>) {
      state.token = action.payload;
      if (action.payload) {
        localStorage.setItem('token', action.payload);
        state.profile = { name: 'Nick Nick', email: 'nick.Nick@otus.ru' };
      } else {
        localStorage.removeItem('token');
        state.profile = null;
      }
    },
    setInitialized(state) {
      state.isInitialized = true;
    },
    clearProfile(state) {
      state.profile = null;
    },
  },
});

export const { setToken, setInitialized, clearProfile } = authSlice.actions;
export default authSlice.reducer;
