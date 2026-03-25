import React, { useState } from 'react';
import '../styles/navbar.css';
import { menuItems } from '../data/data';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <img
            className="navbar-logo-img"
            src="/images/logo-sabores-raices.jpeg"
            alt="Logo Sabores y Raíces Catrachas"
          />
          <h2>Sabores y Raíces Catrachas</h2>
        </div>

        {/* Menu toggle para móvil */}
        <button 
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Menú */}
        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          {menuItems.map((item, index) => (
            <li key={index} className="nav-item">
              <a href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Botón Planear Ruta */}
        <button className="btn btn-primary navbar-btn">
          📍 Planear Ruta
        </button>
      </div>
    </nav>
  );
}
