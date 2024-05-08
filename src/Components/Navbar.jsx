import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className=" shadow-lg  text-black flex flex-col lg:flex-row items-center justify-between py-4 px-8 lg:pr-40 lg:pl-40 ">
      <div className="flex items-center justify-center lg:justify-start mb-4 lg:mb-0">
        <img src="../public/logo.jpg" alt="image1" className="h-10" />
      </div>
      <div className="flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-end space-x-4">
        <NavLink to={'/'} className="nav-link">Home</NavLink>
        <NavLink to={'/history'} className="nav-link">History</NavLink>
        <NavLink to={'/practical'} className="nav-link">Practical-Information</NavLink>
        <NavLink to={'/media'} className="nav-link">Media</NavLink>
        <NavLink to={'/events'} className="nav-link">Events</NavLink>
        
      </div>
    </nav>
  );
};

export default NavBar;
