import loadingIcon from './images/loadingIcon.svg';
import './App.css';
import React from 'react';
/*
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Navbar from './components/Navbar';
*/

function App() {
  return (
    <div className="App">

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

    </div>
  );
}

export default App;


