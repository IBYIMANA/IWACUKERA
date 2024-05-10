// NavBar.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const [showHistoryLinks, setShowHistoryLinks] = useState(false);

  const handleHistoryClick = () => {
    setShowHistoryLinks(!showHistoryLinks);
  };

  return (
    <nav className="fixed top-0 z-10 flex flex-col items-center justify-between w-full px-8 py-4 bg-white shadow-lg lg:pr-40 lg:pl-40 lg:flex-row">
      <div className="flex items-center justify-center mb-4 lg:justify-start lg:mb-0">
        <img src="../public/logo.jpg" alt="image1" className="h-10" />
      </div>
      <div className="flex flex-wrap items-center justify-center space-x-4 lg:flex-nowrap lg:justify-end">
        <NavLink to={'/'} className="nav-link">Home</NavLink>
        <NavLink to={'/history'} className="nav-link" onClick={handleHistoryClick}>History</NavLink>
        <NavLink to={'/practical'} className="nav-link">Practical-Information</NavLink>
        <NavLink to={'/media'} className="nav-link">Media</NavLink>
        <NavLink to={'/events'} className="nav-link">Events</NavLink>
      </div>
     
    </nav>
  );
};

export default NavBar;
