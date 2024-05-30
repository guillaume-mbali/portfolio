import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from './components/Header';
import Portfolio from './pages/projects/Portfolio';
import Rakuten from './pages/projects/Rakuten';
import NoPage from './pages/NoPage';
import Loader from './components/Loader'; // Import the Loader component

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');

    if (hasVisited) {
      setLoading(false);
    } else {
      const timer = setTimeout(() => {
        setLoading(false);
        localStorage.setItem('hasVisited', 'true');
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/portfolio" element={<Portfolio />} />
        <Route path="/projects/rakuten" element={<Rakuten />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
