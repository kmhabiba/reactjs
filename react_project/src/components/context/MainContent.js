import React from 'react';
import { useTheme } from './ThemeContext';
import './Theme.css'; 

const MainContent = () => {
    const { theme, toggleTheme } = useTheme();

    const themeClass = theme === 'light' ? 'light' : 'dark';
    console.log(`Current theme: ${theme}`);

    return (
        <div className={themeClass}>
            <h1>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</h1>
            <p>This is the main content of the app.</p>
            <button onClick={toggleTheme}>
                Switch to {theme === 'light' ? 'dark' : 'light'} mode
            </button>
        </div>
    );
};

export default MainContent;