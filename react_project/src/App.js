import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import { ThemeProvider } from "./components/context/ThemeContext";
import ThemeToggle from "./components/context/ThemeToggle";
import Counter from "./components/reduxCounter";
import styles from "./App.scss";
import Home from "./components/Home";
import CounterApp from "./components/counter1/CounterApp";
import FormWithValidation from "./components/form/formWithValidation";
import DataFetcher from "./components/DataFetcherUseEffect/DataFetcher";
import CreateItem from "./components/CRUD/CreateItem";
import ParentComponent from "./components/DataFetcherChildtoP/ParentComponent";
import Mui from "./components/materialUI/mui";
import { Tooltip } from "@mui/material";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <ThemeProvider>
      <Router>
        <div>
          <nav className={styles.navbar}>
            <button className="hamburger" onClick={toggleMenu}>
              ☰
            </button>
            <ul className={`nav-links ${isMenuOpen ? "show" : ""}`}>
              <li>
                <Tooltip title="Go to Home" arrow>
                  <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")}>
                    Home
                  </NavLink>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Toggle the theme" arrow>
                  <NavLink to="/toggle-theme" className={({ isActive }) => (isActive ? "active-link" : "")}>
                    Theme Toggle
                  </NavLink>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Create a new item" arrow>
                  <NavLink to="/crud/create" className={({ isActive }) => (isActive ? "active-link" : "")}>
                    Create Item
                  </NavLink>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Explore the Redux Counter" arrow>
                  <NavLink to="/reduxCounter" className={({ isActive }) => (isActive ? "active-link" : "")}>
                    Redux Counter
                  </NavLink>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Submit a Form" arrow>
                  <NavLink to="/form" className={({ isActive }) => (isActive ? "active-link" : "")}>
                    Form Submit
                  </NavLink>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Fetch Data using Hooks" arrow>
                  <NavLink to="/data" className={({ isActive }) => (isActive ? "active-link" : "")}>
                    Data Fetcher
                  </NavLink>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Manage the Counter App" arrow>
                  <NavLink to="/counterApp" className={({ isActive }) => (isActive ? "active-link" : "")}>
                    Counter App
                  </NavLink>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="View Parent-Child Components" arrow>
                  <NavLink to="/parent" className={({ isActive }) => (isActive ? "active-link" : "")}>
                    Parent-Child
                  </NavLink>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Material UI Components" arrow>
                  <NavLink to="/materialUI" className={({ isActive }) => (isActive ? "active-link" : "")}>
                    MaterialUI
                  </NavLink>
                </Tooltip>
              </li>
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
            <Route path="/materialUI" element={<Mui />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;