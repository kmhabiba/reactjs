//Child
import React from 'react';

function Counter({ count, increment, decrement, reset }) {
  return (
    <div>
      <h2>Current Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;
