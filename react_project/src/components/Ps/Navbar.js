import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/crud/create">Create Item</Link>
        </li>
        {/* <li>
          <Link to="/crud/update">Update Item</Link>
        </li>
        <li>
          <Link to="/crud/delete">Delete Item</Link>
        </li> */}
        <li>
          <Link to="/counter">Counter App</Link>
        </li>
        <li>
          <Link to="/form">Form Submission</Link>
        </li>
        <li>
          <Link to="/data">Data Fetcher</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
