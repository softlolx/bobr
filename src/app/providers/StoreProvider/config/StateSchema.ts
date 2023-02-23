import { userSchema } from 'entities/User/model/types/userSchema';
import { CounterSchema } from 'entities/Counter/model/types/counterSchema';

export interface StateSchema {
  counter: CounterSchema;
  user: userSchema;
}
