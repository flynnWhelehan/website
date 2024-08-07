import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
import MyairopsProject from './pages/Projects/MyairopsProject';
import EasyAProject from './pages/Projects/EasyAProject';
import GoogleFormulaEProject from './pages/Projects/GoogleFormulaEProject';
import HackawayV7Project from './pages/Projects/HackawayV7Project';
import GoogleTagManager from './components/GoogleTagManager';

function App() {
  return (
    <Router>
      <div className="App">
        <GoogleTagManager />
        <Navbar/>
        <Routes>
          <Route path="/website" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/myairops-project" element={<MyairopsProject />} />
          <Route path="/easya-project" element={<EasyAProject />} />
          <Route path="/google-formulae-project" element={<GoogleFormulaEProject />} />
          <Route path="/hackaway-v7-project" element={<HackawayV7Project />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;