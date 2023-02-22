import { FC } from 'react';
import { Button } from 'shared/ui/Button/Button';

interface CounterProps {

}

export const Counter: FC<CounterProps> = () => {
  const onIncrement = () => {
    
  }

  const onDecrement = () => {

  }


  return (
    <div>
      <h2>{value}</h2>
      <Button onClick={onIncrement}>increment</Button>
      <Button onClick={onDecrement}>decrement</Button>
    </div>
  );
};