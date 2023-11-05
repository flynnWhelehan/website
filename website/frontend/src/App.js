import loadingIcon from './images/loadingIcon.svg';
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" component={About} />
          <Route path="/" element={
            <>
              <header className="App-header">
                <img src={loadingIcon} className="App-logo" alt="loadingIcon" />
                <p>
                  Website in progress...
                </p>
                <a
                  className="App-link"
                  href="https://www.linkedin.com/in/flynnwhelehan/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Connect with Flynn
                </a>
              </header>
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


