import React, { useState, useCallback } from 'react';
import { IoMenu, IoClose, IoMoonOutline } from "react-icons/io5";
import { useTheme } from '../context/ThemeContext';

const Nav = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [activeLink, setActiveLink] = useState('#home');
  const [isToggled, setIsToggled] = useState(false);

  const handleLinkClick = useCallback((link) => {
    setActiveLink(link);
    setIsToggled(false);
  }, []);

  const toggleNavbar = useCallback(() => {
    setIsToggled((prevState) => !prevState);
  }, []);

  return (
    <nav className="navbar" role="navigation">
      <div className="container">
        <a className="display-6" href="#home" onClick={() => handleLinkClick('#home')}>MEI</a>

        <div className="right-section">
          <button
            className={`navbar-toggler ${isToggled ? 'toggled' : ''}`}
            type="button"
            aria-label="Toggle dark mode"
            onClick={toggleDarkMode}
          >
            <IoMoonOutline size={20} />
          </button>
          <button
            className={`navbar-toggler ${isToggled ? 'toggled' : ''}`}
            type="button"
            aria-expanded={isToggled ? "true" : "false"}
            aria-label="Toggle navigation"
            onClick={toggleNavbar}
          >
            {isToggled ? <IoClose size={30} /> : <IoMenu size={30} />}
          </button>
        </div>

        <div className={`collapse navbar-collapse ${isToggled ? 'show collapsed-navbar' : ''}`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className={`nav-link ${activeLink === '#about' ? 'active' : ''}`}
                href="#about"
                onClick={() => handleLinkClick('#about')}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeLink === '#projects' ? 'active' : ''}`}
                href="#projects"
                onClick={() => handleLinkClick('#projects')}
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeLink === '#contact' ? 'active' : ''}`}
                href="#contact"
                onClick={() => handleLinkClick('#contact')}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
