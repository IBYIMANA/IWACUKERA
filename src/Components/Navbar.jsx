// NavBar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

  return (
    <nav className="fixed top-0 z-10 flex flex-col items-center justify-between w-full px-8 py-4 shadow-lg bg-gray-50 lg:pr-40 lg:pl-40 lg:flex-row">
      <div className="flex items-center justify-center mb-4 lg:justify-start lg:mb-0">
        <img src="../public/logo2.JPG" alt="image1" className=" w-52 h-14" />
        <button
          className="text-black lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              // d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>
      <div className="flex flex-wrap items-center justify-center space-x-4 font-medium text-1xl lg:flex-nowrap lg:justify-end">
    <NavLink to="/" exact className={({ isActive }) => isActive ? 'text-white bg-blue-300 px-3 py-2 rounded-md' : 'text-black px-3 py-2 rounded-md'}>Home</NavLink>
    <NavLink to="/history" className={({ isActive }) => isActive ? 'text-white bg-blue-300 px-3 py-2 rounded-md' : 'text-black px-3 py-2 rounded-md'}>History</NavLink>
    <NavLink to="/practical" className={({ isActive }) => isActive ? 'text-white bg-blue-300 px-3 py-2 rounded-md' : 'text-black px-3 py-2 rounded-md'}>Practical-Information</NavLink>
    <NavLink to="/media" className={({ isActive }) => isActive ? 'text-white bg-blue-300 px-3 py-2 rounded-md' : 'text-black px-3 py-2 rounded-md'}>Media</NavLink>
    <NavLink to="/events" className={({ isActive }) => isActive ? 'text-white bg-blue-300 px-3 py-2 rounded-md' : 'text-black px-3 py-2 rounded-md'}>Events</NavLink>
    <NavLink to="/admin" className={({ isActive }) => isActive ? 'text-white bg-blue-300 px-3 py-2 rounded-md' : 'text-black px-3 py-2 rounded-md'}>Dashboard</NavLink>
    <NavLink to="/Contact" className={({ isActive }) => isActive ? 'text-white bg-blue-300 px-3 py-2 rounded-md' : 'text-black px-3 py-2 rounded-md'}>Contact</NavLink>
    
  </div>
    </nav>
  );
};

export default NavBar;
