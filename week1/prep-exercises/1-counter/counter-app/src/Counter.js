// Counter.js
import React, { useState } from 'react';
import Button from './Button';
import Count from './Count';

const Counter = () => {
  const [count, setCount] = useState(0);
  const feedback = count > 10 ? "It's higher than 10!" : "Keep counting...";

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Counter App</h1>
      <Count count={count} />
      <Button handleClick={incrementCount} />
      <p>{feedback}</p>
    </div>
  );
};

export default Counter;
