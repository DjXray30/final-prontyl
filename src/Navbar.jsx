import React from 'react';
import { Link } from 'react-router-dom';
import prontylLogo from './assets/prontyl.jpeg'; // Ensure the image is in the same directory or adjust the path accordingly

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white shadow-md z-50 ">
      {/* <div className="flex items-center"> */}
      <img src={prontylLogo} alt="Prontyl Logo" className="h-10 w-auto absolute left-2 top-2" />
        {/* </div> */}
      <div className="navbar__container flex justify-center items-center px-4 py-4">
       
        

        
        <ul className="navbar__list flex space-x-10">
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
