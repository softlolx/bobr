import { createSlice } from '@reduxjs/toolkit';
import { userSchema } from '../types/userSchema';

const initialState: userSchema = {
  name: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export const { actions } = userSlice;
export const { reducer } = userSlice;
