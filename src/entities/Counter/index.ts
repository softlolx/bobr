import { CounterSchema } from './model/types/counterSchema';
import { reducer as counterReducer } from './model/slice/counterSlice';
import { Counter } from './ui/Counter';

export { Counter, CounterSchema, counterReducer };
