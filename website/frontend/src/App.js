import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
import MyairopsProject from './pages/Projects/MyairopsProject';
import EasyAProject from './pages/Projects/EasyAProject';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/website" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/myairops-project" element={<MyairopsProject />} />
          <Route path="/easya-project" element={<EasyAProject />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;