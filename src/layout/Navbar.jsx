import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full  bg-opacity-80 text-white px-20 py-10 z-50 ">
      <ul className="flex space-x-6 text-lg">
        <li>
          <Link to="/" className="hover:text-yellow-400 transition">
            Home
          </Link>
        </li>
        <li>
          <Link to="/characters" className="hover:text-yellow-400 transition">
            Characters
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
