import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { userReducer } from '../../../../entities/User';
import { counterReducer } from '../../../../entities/Counter';
import { StateSchema } from './StateSchema';

export const createReduxStore = (initialState?: StateSchema) => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
  };

  return configureStore({
    reducer: rootReducers,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
};
