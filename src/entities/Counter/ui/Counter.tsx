import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
import { getCounterValue } from '../model/selectors/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

interface CounterProps {
  initialState?: number;
}

export const Counter: FC<CounterProps> = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);

  const onIncrement = () => {
    dispatch(counterActions.increment());
  };

  const onDecrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div data-testid='counter'>
      <h2 data-testid='counter-value'>{counterValue}</h2>
      <Button data-testid='dec-button' onClick={onDecrement}>decrement</Button>
      <Button data-testid='inc-button' onClick={onIncrement}>increment</Button>
    </div>
  );
};
