import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginByUsername } from '../services/loginByUsername';
import { LoginSchema } from '../types/loginSchema';

const initialState: LoginSchema = {
  username: '',
  password: '',
  isLoading: false,
  error: '',
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      console.log(action.payload);
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    resetStore: (state, action: PayloadAction<string>) => {
      state.username = '';
      state.password = '';
      state.isLoading = false;
      state.error = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginByUsername.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(loginByUsername.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(loginByUsername.rejected, (state, action) => {
        state.isLoading = false;
        (state as any).error = action.payload;
      });
  },
});

export const { actions, reducer } = loginSlice;
