import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from 'entities/User';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps>(
  'login/fetchByIdStatus',
  async ({ username, password }, thunkAPI) => {
    try {
      const response = await axios.post<User>('http://localhost:8000/login', { username, password });
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue('error');
    }
  }
);
