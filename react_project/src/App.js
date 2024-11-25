import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import { ThemeProvider } from './components/context/ThemeContext';
import ThemeToggle from './components/context/ThemeToggle';
import Counter from './components/reduxCounter';
import './App.scss';
import Home from './components/Home';
import CounterApp from './components/counter1/CounterApp';
import FormWithValidation from './components/form/formWithValidation';
import DataFetcher from './components/DataFetcherUseEffect/DataFetcher';
import CreateItem from "./components/CRUD/CreateItem";
import ParentComponent from './components/DataFetcherChildtoP/ParentComponent';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <ThemeProvider>
      <Router>
        <div>
          <nav className="navbar">

            <button className="hamburger" onClick={toggleMenu}>
              ☰
            </button>
            <ul className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
              <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : '')}>Home</NavLink></li>
              <li><NavLink to="/toggle-theme" className={({ isActive }) => (isActive ? 'active-link' : '')}>Theme Toggle</NavLink></li>
              <li><NavLink to="/crud/create" className={({ isActive }) => (isActive ? 'active-link' : '')}>Create Item</NavLink></li>
              <li><NavLink to="/reduxCounter" className={({ isActive }) => (isActive ? 'active-link' : '')}>Redux Counter</NavLink></li>
              <li><NavLink to="/form" className={({ isActive }) => (isActive ? 'active-link' : '')}>Form Submit</NavLink></li>
              <li><NavLink to="/data" className={({ isActive }) => (isActive ? 'active-link' : '')}>Data Fetcher</NavLink></li>
              <li><NavLink to="/counterApp" className={({ isActive }) => (isActive ? 'active-link' : '')}>Counter App</NavLink></li>
              <li><NavLink to="/parent" className={({ isActive }) => (isActive ? 'active-link' : '')}>Parent-Child</NavLink></li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/toggle-theme" element={<ThemeToggle />} />
            <Route path="/reduxCounter" element={<Counter />} />
            <Route path="/crud/create" element={<CreateItem />} />
            <Route path="/counterApp" element={<CounterApp />} />
            <Route path="/form" element={<FormWithValidation />} />
            <Route path="/data" element={<DataFetcher />} />
            <Route path="/parent" element={<ParentComponent />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;