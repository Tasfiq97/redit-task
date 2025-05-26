import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full  bg-opacity-80 text-white px-20 py-5 z-2 bg-black opacity-[1]">
      <ul className="flex space-x-6 text-lg">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'text-yellow-400 transition' : 'hover:text-yellow-400 transition')}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/characters"
            className={({ isActive }) => (isActive ? 'text-yellow-400 transition' : 'hover:text-yellow-400 transition')}
          >
            Characters
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
