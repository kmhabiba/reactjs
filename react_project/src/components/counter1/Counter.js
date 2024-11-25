//Child
import React from 'react';

function Counter({ count, increment, decrement, reset }) {
  return (
    <div>
      <h2>Current Count: {count}</h2>
      <button className="btn-increment" onClick={increment}>Increment</button>
      <button className="btn-decrement"onClick={decrement}>Decrement</button>
      <button className="btn-reset" onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;
