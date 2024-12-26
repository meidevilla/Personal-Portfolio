import React, { useState } from 'react';
import { IoMenu } from "react-icons/io5";

const Header = () => {
  const [activeLink, setActiveLink] = useState('#home');
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  return (
    <header>
      <nav className="navbar">
        <div className="container">
          <a className="display-5" href="#home" onClick={() => handleLinkClick('#home')}>MEI</a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <IoMenu size={30} />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className={`nav-link ${activeLink === '#about' ? 'active' : ''}`} href="#about" onClick={() => handleLinkClick('#about')}>
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${activeLink === '#projects' ? 'active' : ''}`} href="#projects" onClick={() => handleLinkClick('#projects')} >
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${activeLink === '#contact' ? 'active' : ''}`} href="#contact" onClick={() => handleLinkClick('#contact')}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
      </nav>
    </header>
  );
};

export default Header;
