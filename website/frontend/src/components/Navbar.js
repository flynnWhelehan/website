import React, { useEffect, useState } from 'react';
import './styles/Navbar.css';
import { Link } from 'react-router-dom';
import FwLogo from '../images/favicon/android-chrome-512x512.png';

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
      <Link to="/website">
        <img src={FwLogo} alt="FW Logo / Home" className={`logo ${shrink ? 'shrink' : ''}`} />
      </Link>
      <div className="title-and-links">
        <div className="links-container">
          <Link to="/projects" className="navbar-link">Projects</Link>
          <Link to="/contact" className="navbar-link">Contact</Link>
        </div>
        <div className={`current-title-container ${shrink && currentTitle ? 'shrink' : ''}`}>
          <span className="current-title">{currentTitle}</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;