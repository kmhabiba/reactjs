import React, { useState } from 'react';
import Counter from './Counter'; 
import styles from '../../App.scss';

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
    <div className={styles.CounterApp}>
      <h1 className = {styles.navbarAlign}> Counter App</h1>
      <p className = {styles.contentBelowHeading}>This is the content of counter app</p>
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
