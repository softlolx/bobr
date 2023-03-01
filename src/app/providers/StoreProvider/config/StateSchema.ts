import { LoginSchema } from 'features/AuthByUsername/model/types/loginSchema';
import { UserSchema } from 'entities/User/model/types/UserSchema';
import { CounterSchema } from 'entities/Counter/model/types/counterSchema';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  login: LoginSchema
}
