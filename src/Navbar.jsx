import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__logo">
          Prontyl
        </Link>
        <ul className="navbar__menu">
          <li className="navbar__item">
            <Link to="/" className="navbar__link">
              Home
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/about" className="navbar__link">
              About
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/services" className="navbar__link">
              Services
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/contact" className="navbar__link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
