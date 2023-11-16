import React, { useEffect, useState } from 'react';
import './styles/navbar.css';
import { Link } from 'react-router-dom';
import FwLogo from '../images/favicon/favicon-32x32.png';

function Navbar() {
  const [shrink, setShrink] = useState(false);
  const [opaque, setOpaque] = useState(false);
  const [currentTitle, setCurrentTitle] = useState('');

  const handleScroll = () => {
    if (window.scrollY > 80) {
      setShrink(true);
      setOpaque(true);
    } else {
      setShrink(false);
      setOpaque(false);
    }

    // Get all title elements
    const titles = Array.from(document.querySelectorAll('.title'));
    let found = false;
    for (let i = titles.length - 1; i >= 0; i--) {
      const rect = titles[i].getBoundingClientRect();
      if (rect.top <= 0) {
        setCurrentTitle(titles[i].textContent);
        found = true;
        break;
      }
    }

    if (!found) {
      setCurrentTitle('');
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
      <div className="title-and-links">
        <div className="links-container">
          <Link to="/about" className="navbar-link">About</Link>
          <a href="https://www.linkedin.com/in/flynnwhelehan/" className="navbar-link">Contact</a>
        </div>
        <div className={`current-title-container ${shrink && currentTitle ? 'shrink' : ''}`}>
          <span className="current-title">{currentTitle}</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;