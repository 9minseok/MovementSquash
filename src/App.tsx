import React from 'react';
import "./styles/index.scss";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';

import MainPage from './pages/MainPage';
import MenuPage from './pages/MenuPage';
import MeasurePage from './pages/MeasurePage';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainPage />} />
        <Route path="/Menu" element={<MenuPage />} />
        <Route path="/Measure" element={<MeasurePage />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
