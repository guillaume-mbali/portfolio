import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from './components/Header';
import Portfolio from './pages/projects/Portfolio';
import Rakuten from './pages/projects/Rakuten';
import NoPage from './pages/NoPage';


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/portfolio" element={<Portfolio />} />
        <Route path="/projects/rakuten" element={<Rakuten />} />
        <Route path="*" element={<NoPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
