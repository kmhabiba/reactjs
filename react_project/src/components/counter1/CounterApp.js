//Parent
import React, { useState } from 'react';
import Counter from './Counter'; 
function CounterApp() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="CounterApp">
      <h1>Counter App</h1>
      <Counter 
        count={count} 
        increment={increment} 
        decrement={decrement} 
        reset={reset}
       />
    </div>
  );
}

export default CounterApp;
