import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { USER_LS_KEY } from 'shared/const/localstorage';
import { User, UserSchema } from '../types/userSchema';

const initialState: UserSchema = {};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },
    initAuthData: (state, action: PayloadAction<User>) => {
      const userData = localStorage.getItem(USER_LS_KEY);
      if (userData) {
        state.authData = JSON.parse(userData);
      }
    },
    logOut: (state, action: PayloadAction<User>) => {
      state.authData = null;
      localStorage.removeItem(USER_LS_KEY);
    },
  },
});

export const { actions, reducer } = userSlice;
