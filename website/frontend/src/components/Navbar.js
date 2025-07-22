import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollHandler } from '../hooks/useScrollHandler';
import FwLogo from '../images/favicon/android-chrome-512x512.png';
import './styles/Navbar.css';

const Navbar = () => {
  const { shouldShrink, shouldShowOpaque, currentTitle } = useScrollHandler();

  const navbarClasses = [
    'navbar',
    shouldShrink && 'navbar--shrink',
    shouldShowOpaque && 'navbar--opaque'
  ].filter(Boolean).join(' ');

  const logoClasses = [
    'navbar__logo',
    shouldShrink && 'navbar__logo--shrink'
  ].filter(Boolean).join(' ');

  const titleContainerClasses = [
    'navbar__title-container',
    shouldShrink && currentTitle && 'navbar__title-container--shrink'
  ].filter(Boolean).join(' ');

  return (
    <nav className={navbarClasses} role="navigation" aria-label="Main navigation">
      <Link to="/website" className="navbar__home-link" aria-label="Go to homepage">
        <img 
          src={FwLogo} 
          alt="FW Logo" 
          className={logoClasses}
          width="32"
          height="32"
        />
      </Link>
      
      <div className="navbar__content">
        <ul className="navbar__links" role="menubar">
          <li role="none">
            <Link 
              to="/projects" 
              className="navbar__link" 
              role="menuitem"
              aria-label="View projects"
            >
              Projects
            </Link>
          </li>
          <li role="none">
            <Link 
              to="/contact" 
              className="navbar__link" 
              role="menuitem"
              aria-label="Contact information"
            >
              Contact
            </Link>
          </li>
        </ul>
        
        {currentTitle && (
          <div className={titleContainerClasses} aria-live="polite">
            <span className="navbar__current-title">{currentTitle}</span>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;