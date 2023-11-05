import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <h1>The FW Project</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" component={About} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;


