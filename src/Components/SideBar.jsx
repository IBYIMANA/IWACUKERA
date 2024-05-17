import React from 'react';
import { NavLink } from 'react-router-dom';

const SideBar = () => {
  return (
    <div>
      <h1 className='float-left ml-40 font-bold capitalize'>IWACU KERA</h1>
      <div className="fixed top-0 left-0 h-full w-64 bg-gray-200 flex flex-col py-8 px-4 shadow-lg z-10 rounded-md text-gray-800 font-semibold">
        <NavLink
          to="/dashboard"
          exact="true"
          className={({ isActive }) =>
            isActive ? 'text-white bg-blue-300 px-3 py-2 rounded-md' : 'text-black px-3 py-2 rounded-md'
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/proverb"
          exact="true"
          className={({ isActive }) =>
            isActive ? 'text-white bg-blue-300 px-3 py-2 rounded-md' : 'text-black px-3 py-2 rounded-md'
          }
        >
          Imigani
        </NavLink>
        <NavLink
          to="/activity"
          exact="true"
          className={({ isActive }) =>
            isActive ? 'text-white bg-blue-300 px-3 py-2 rounded-md' : 'text-black px-3 py-2 rounded-md'
          }
        >
          Events
        </NavLink>
        <NavLink
          to="/med"
          exact="true"
          className={({ isActive }) =>
            isActive ? 'text-white bg-blue-300 px-3 py-2 rounded-md' : 'text-black px-3 py-2 rounded-md'
          }
        >
          Media
        </NavLink>
      </div>
    </div>
  );
}

export default SideBar;
