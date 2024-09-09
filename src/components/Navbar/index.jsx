import React, { useState } from 'react';
import Logo from "../assets/Logo.svg";
import "./styles.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
      <img src={Logo} alt="logo" />
      <button className="nav-menu-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
        {isMenuOpen ? '×' : '☰'}
      </button>
      <ul>
        <li><a href="/" className="nav-item">HOME</a></li>
        <li><a href="#" className="nav-item">ABOUT</a></li>
        <li><a href="#" className="nav-item">MENU</a></li>
        <li><a href="/booking" className="nav-item">RESERVATIONS</a></li>
        <li><a href="#" className="nav-item">ORDER ONLINE</a></li>
        <li><a href="#" className="nav-item">LOGIN</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
