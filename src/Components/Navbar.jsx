// NavBar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

  return (
    <nav className="fixed top-0 z-10 flex flex-col items-center justify-between w-full px-8 py-4 bg-gray-50 shadow-lg lg:pr-40 lg:pl-40 lg:flex-row">
      <div className="flex items-center justify-center mb-4 lg:justify-start lg:mb-0">
        <img src="../public/logo.png" alt="image1" className='h-20 w-30'/>
      </div>
      <div className="flex flex-wrap items-center font-medium text-1xl justify-center space-x-4 lg:flex-nowrap lg:justify-end">
    <NavLink to="/" exact="true" className={({ isActive }) => isActive ? 'text-white bg-blue-300 px-3 py-2 rounded-md' : 'text-black px-3 py-2 rounded-md'}>Home</NavLink>
    <NavLink to="/history" exact="true" className={({ isActive }) => isActive ? 'text-white bg-blue-300 px-3 py-2 rounded-md' : 'text-black px-3 py-2 rounded-md'}>History</NavLink>
    <NavLink to="/practical" exact="true" className={({ isActive }) => isActive ? 'text-white bg-blue-300 px-3 py-2 rounded-md' : 'text-black px-3 py-2 rounded-md'}>Practical-Information</NavLink>
    <NavLink to="/media"  exact="true" className={({ isActive }) => isActive ? 'text-white bg-blue-300 px-3 py-2 rounded-md' : 'text-black px-3 py-2 rounded-md'}>Media</NavLink>
    <NavLink to="/events" exact="true" className={({ isActive }) => isActive ? 'text-white bg-blue-300 px-3 py-2 rounded-md' : 'text-black px-3 py-2 rounded-md'}>Events</NavLink>
    <NavLink to="/dashboard" exact="true" className={({ isActive }) => isActive ? 'text-white bg-blue-300 px-3 py-2 rounded-md' : 'text-black px-3 py-2 rounded-md'}>Dashboard</NavLink>
  </div>
    </nav>
  );
};

export default NavBar;
