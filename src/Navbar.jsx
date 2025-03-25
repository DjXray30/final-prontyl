import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className=" w-full bg-white shadow-md z-50">
      <div className="navbar__container  flex  justify-center items-center  px-4 py-2">
        
        <ul className="navbar__menu flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
          <li className="navbar__item">
            <Link to="/" className="navbar__link text-gray-700 hover:text-blue-500">
              Home
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/about" className="navbar__link text-gray-700 hover:text-blue-500">
              About
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/services" className="navbar__link text-gray-700 hover:text-blue-500">
              Services
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/contact" className="navbar__link text-gray-700 hover:text-blue-500">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
