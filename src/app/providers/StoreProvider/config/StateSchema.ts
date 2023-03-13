import { LoginSchema } from 'features/AuthByUsername/model/types/loginSchema';
import { UserSchema } from 'entities/User/model/types/userSchema';
import { CounterSchema } from 'entities/Counter/model/types/counterSchema';
import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;

  //  async reducers
  login?: LoginSchema;
}

export type StateSchemaKeys = keyof StateSchema;

export interface ReducerManger {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKeys, reducer: Reducer) => void;
  remove: (key: StateSchemaKeys) => void;
}
export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManger;
}
