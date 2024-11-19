import React from 'react';
import { useTheme } from './ThemeContext';
import '../../App.css';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className = "theme-toggle-container">
      <h1 className="navbar-align">ThemeToggleButton</h1>
      <p className='content-below-heading'>This is the content of ThemeToggleButton</p>
      <div className = "content">
        <button onClick={toggleTheme}>
          Switch to {theme === 'light' ? 'dark' : 'light'} mode
        </button>
      </div>
    </div>
  );
};

export default ThemeToggleButton;
