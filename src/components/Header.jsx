
import React, { useState } from 'react';
import './Header.css';

const Header = ({ navigations = [], cart = 0 }) => {
  const [active, setActive] = useState('Home');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = (name) => {
    setActive(name);
    setMenuOpen(false);
  };

  return (
    <nav className="nav-bar">
      {/* Logo */}
      <h2 className="logo">
        Buds <span>Paradise</span>
      </h2>

      {/* Navigation Links */}
      <ul
        id="header-navigation"
        className={`nav-links ${menuOpen ? 'show-menu' : ''}`}
      >
        {navigations.map((item) => (
          <li key={item.name}>
            <a
              href={item.url}
              className={active === item.name ? 'active' : ''}
              onClick={() => handleNavigation(item.name)}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Right Side Icons */}
      <div className="head-end">
        <button type="button" aria-label="Search">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>

        <button
          type="button"
          className="cart-btn"
          aria-label={`Shopping cart, ${cart} items`}
        >
          <i className="fa-solid fa-cart-shopping"></i>
          {cart > 0 && (
            <sup className="cart-count">{cart}</sup>
          )}
        </button>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="header-navigation"
        >
          <i
            className={`fa-solid ${
              menuOpen ? 'fa-xmark' : 'fa-bars'
            }`}
          ></i>
        </button>
      </div>
    </nav>
  );
};

export default Header;
