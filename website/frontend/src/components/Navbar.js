import React from 'react';
import './styles/Navbar.css';
import { Link } from 'react-router-dom';
import FwLogo from '../images/favicon/favicon-32x32.png';

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <img src={FwLogo} alt="FW Logo / Home" className="logo" />
      </Link>
      <Link to="/about">About</Link>
      <a href="https://www.linkedin.com/in/flynnwhelehan/">Contact</a>
    </div>
  );
}

export default Navbar;