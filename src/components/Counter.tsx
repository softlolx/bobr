import { useState } from 'react';
import cn from './Counter.module.scss';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>{count}</h2>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
        className={cn.button}
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
