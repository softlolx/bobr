import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { USER_LS_KEY } from 'shared/const/localstorage';
import { User, userActions } from '../../../../entities/User';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { state: StateSchema }>(
  'login/fetchByIdStatus',
  async ({ username, password }, thunkAPI) => {
    try {
      const response = await axios.post<User>('http://localhost:8000/login', {
        username,
        password,
      });

      localStorage.setItem(USER_LS_KEY, JSON.stringify(response.data));
      thunkAPI.dispatch(userActions.setUserInfo(response.data));

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('You provided wrong login credentials');
    }
  }
);
