import React, { useEffect, useState } from 'react';
import './styles/Navbar.css';
import { Link } from 'react-router-dom';
import FwLogo from '../images/favicon/favicon-32x32.png';

function Navbar() {
  const [shrink, setShrink] = useState(false);
  const [opaque, setOpaque] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 80) {
      setShrink(true);
      setOpaque(true);
    } else {
      setShrink(false);
      setOpaque(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${shrink ? 'shrink' : ''} ${opaque ? 'opaque' : ''}`}>
      <Link to="/">
        <img src={FwLogo} alt="FW Logo / Home" className={`logo ${shrink ? 'shrink' : ''}`} />
      </Link>
      <div className="links-container">
        <Link to="/about" className="navbar-link">About</Link>
        <a href="https://www.linkedin.com/in/flynnwhelehan/" className="navbar-link">Contact</a>
      </div>
    </div>
  );
}

export default Navbar;