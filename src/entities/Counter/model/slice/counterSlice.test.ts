import { CounterSchema } from 'entities/Counter/model/types/counterSchema';
import { counterActions, reducer as counterReducer } from './counterSlice';

describe('counterSlice test', () => {
  test('should return +1', () => {
    const state: CounterSchema = { value: 10 };
    expect(counterReducer(state as CounterSchema, counterActions.increment)).toEqual({ value: 11 });
  });
  test('should return -1', () => {
    const state: CounterSchema = { value: 10 };
    expect(counterReducer(state as CounterSchema, counterActions.decrement)).toEqual({ value: 9 });
  });
  test('should return -1', () => {
    expect(counterReducer(undefined, counterActions.decrement)).toEqual({ value: -1 });
  });
});
