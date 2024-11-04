// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { ThemeProvider } from './components/context/ThemeContext';
import ThemeToggle from './components/context/ThemeToggle';
import Counter from './components/Counter'; 
import Home from './components/Home'; 
import MainContent from './components/context/MainContent';
const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/toggle-theme">Toggle Theme</Link>
              </li>
              <li>
                <Link to="/Main-content">Main content</Link>
              </li>
              <li>
                <Link to="/crud/create">CreateItem</Link>
              </li>
              <li>
                <Link to="/counter">counterApp</Link>
              </li>
              <li>
                <Link to="/form">FormSubmit</Link>
              </li>
              <li>
                <Link to="/data">DataFetcher</Link>
              </li>
              {/* <li>
                <Link to="/counter">Counter</Link>
              </li> */}
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/" element={<h1>Welcome to the Multi-App Project</h1>} />
            <Route path="/toggle-theme" element={<ThemeToggle />} />
            <Route path="/main-content" element={<MainContent />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/crud/create" element={<CreateItem />} />
            <Route path="/counter" element={<CounterApp />} />
            <Route path="/form" element={<FormSubmit />} />       
            <Route path="/data" element={<DataFetcher />} /> 
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;