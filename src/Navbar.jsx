import React from 'react';
import { Link } from 'react-router-dom';
import prontylLogo from './assets/prontyl.jpeg';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-black z-50">
      <img src={prontylLogo} alt="Prontyl Logo" className="h-10 w-auto absolute left-50 top-2" />
      <div className="navbar__container flex justify-center items-center px-4 py-4">
        <ul className="navbar__list flex space-x-10 text-white font-bold text-xl">
          <li className="navbar__item">
            <Link to="/" className="navbar__link hover:text-blue-500">
              Home
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/elections" className="navbar__link hover:text-blue-500">
              Elections
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/register" className="navbar__link hover:text-blue-500">
              Register
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/about-us" className="navbar__link hover:text-blue-500">
              About Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
