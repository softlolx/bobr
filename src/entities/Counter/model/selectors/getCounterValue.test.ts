import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { DeepPartial } from '@reduxjs/toolkit';

import { getCounterValue } from './getCounterValue';

describe('get counter', () => {
  test('should return state value', () => {
    const state: DeepPartial<StateSchema> = { counter: { value: 10 } };
    expect(getCounterValue(state as StateSchema)).toBe(10);
  });
});
