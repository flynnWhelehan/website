import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
import MyairopsProject from './pages/Projects/MyairopsProject';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <h1 className="title">The FW Project</h1>
        <Routes>
          <Route path="/website" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/myairops-project" element={<MyairopsProject />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;