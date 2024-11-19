import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();

    return (
        <div>
            <h1 className = "navbar-align"> Counter Using Redux</h1>
            <p className = "content-below-heading">This is the content of redux counter</p>
            <h1>{count}</h1>
            <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
        </div>
    );
};

export default Counter;