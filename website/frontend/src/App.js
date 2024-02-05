import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <h1 className="title">The FW Project</h1>
        <Routes>
          <Route path="/website" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;


