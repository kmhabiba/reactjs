import React from 'react';
import { useTheme } from './ThemeContext';

const MainContent = () => {
    const { theme } = useTheme();

    const themeStyles = {
        backgroundColor: theme === 'light' ? '#ffffff' : '#333333',
        color: theme === 'light' ? '#000000' : '#ffffff',
        minHeight: '100vh',
        padding: '20px',
    };

    return (
        <div style={themeStyles}>
            <h1>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</h1>
            <p>This is the main content of the app.</p>
            <button onClick={toggleTheme}>
            Switch to {theme === 'light' ? 'dark' : 'light'} mode
        </button>
        </div>
    );
};

export default MainContent;