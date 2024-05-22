import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaTachometerAlt, FaBook, FaCalendarAlt, FaPhotoVideo, FaSignOutAlt, FaBars, FaTimes } from 'react-icons/fa';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-300">
      <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-10 rounded-md text-gray-800 font-semibold lg:flex lg:flex-col py-8 px-4 hidden">
        <div className="flex items-center justify-center mb-8">
          <img src="../public/logo.png" alt="Logo" className='h-20 w-30' />
        </div>
        <nav className="flex flex-col space-y-4 justify-center items-center mt-10">
          <NavLink
            to="/dashboard"
            exact="true"
            className={({ isActive }) =>
              isActive
                ? 'flex items-center text-white bg-blue-300 rounded-lg px-3 py-2'
                : 'flex items-center text-black hover:bg-blue-300 w-full border-b border-stone-100 shadow-lg rounded-lg text-2xl px-3 py-2'
            }
          >
            <FaTachometerAlt className="mr-2" />
            Dashboard
          </NavLink>
          <NavLink
            to="/proverb"
            exact="true"
            className={({ isActive }) =>
              isActive
                ? 'flex items-center text-white bg-blue-300 rounded-lg px-3 py-2'
                : 'flex items-center text-black hover:bg-blue-300 w-full text-1xl border-b border-stone-100 shadow-lg rounded-lg px-3 py-2'
            }
          >
            <FaBook className="mr-2" />
            Proverb
          </NavLink>
          <NavLink
            to="/activity"
            exact="true"
            className={({ isActive }) =>
              isActive
                ? 'flex items-center text-white bg-blue-300 rounded-lg px-3 py-2'
                : 'flex items-center text-black hover:bg-blue-300 w-full text-1xl border-b border-stone-100 shadow-lg rounded-lg px-3 py-2'
            }
          >
            <FaCalendarAlt className="mr-2" />
            Events
          </NavLink>
          <NavLink
            to="/med"
            exact="true"
            className={({ isActive }) =>
              isActive
                ? 'flex items-center text-white bg-blue-300 rounded-lg px-3 py-2'
                : 'flex items-center text-black hover:bg-blue-300 w-full text-1xl border-b border-stone-100 shadow-lg rounded-lg px-3 py-2'
            }
          >
            <FaPhotoVideo className="mr-2" />
            Media
          </NavLink>
        </nav>
        <div className="mt-auto">
          <NavLink
            to="/logout"
            exact="true"
            className="flex items-center text-black hover:bg-blue-300 text-2xl border-b border-stone-100 shadow-lg rounded-lg px-3 py-2"
          >
            <FaSignOutAlt className="mr-2" />
            Logout
          </NavLink>
        </div>
      </div>

      <div className="lg:hidden flex items-center justify-between w-full bg-white p-4 shadow-lg">
        <img src="../public/logo.png" alt="Logo" className='h-10 w-20' />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl text-gray-800 focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-20 flex flex-col py-8 px-4 lg:hidden">
          <div className="flex items-center justify-center mb-8">
            <img src="../public/logo.png" alt="Logo" className='h-20 w-30' />
          </div>
          <nav className="flex flex-col space-y-4 justify-center items-center mt-10">
            <NavLink
              to="/dashboard"
              exact="true"
              className={({ isActive }) =>
                isActive
                  ? 'flex items-center text-white bg-blue-300 rounded-lg px-3 py-2'
                  : 'flex items-center text-black hover:bg-blue-300 w-full border-b border-stone-100 shadow-lg rounded-lg text-2xl px-3 py-2'
              }
            >
              <FaTachometerAlt className="mr-2" />
              Dashboard
            </NavLink>
            <NavLink
              to="/proverb"
              exact="true"
              className={({ isActive }) =>
                isActive
                  ? 'flex items-center text-white bg-blue-300 rounded-lg px-3 py-2'
                  : 'flex items-center text-black hover:bg-blue-300 w-full text-1xl border-b border-stone-100 shadow-lg rounded-lg px-3 py-2'
              }
            >
              <FaBook className="mr-2" />
              Proverb
            </NavLink>
            <NavLink
              to="/activity"
              exact="true"
              className={({ isActive }) =>
                isActive
                  ? 'flex items-center text-white bg-blue-300 rounded-lg px-3 py-2'
                  : 'flex items-center text-black hover:bg-blue-300 w-full text-1xl border-b border-stone-100 shadow-lg rounded-lg px-3 py-2'
              }
            >
              <FaCalendarAlt className="mr-2" />
              Events
            </NavLink>
            <NavLink
              to="/med"
              exact="true"
              className={({ isActive }) =>
                isActive
                  ? 'flex items-center text-white bg-blue-300 rounded-lg px-3 py-2'
                  : 'flex items-center text-black hover:bg-blue-300 w-full text-1xl border-b border-stone-100 shadow-lg rounded-lg px-3 py-2'
              }
            >
              <FaPhotoVideo className="mr-2" />
              Media
            </NavLink>
          </nav>
          <div className="mt-auto">
            <NavLink
              to="/logout"
              exact="true"
              className="flex items-center text-black hover:bg-blue-300 text-2xl border-b border-stone-100 shadow-lg rounded-lg px-3 py-2"
            >
              <FaSignOutAlt className="mr-2" />
              Logout
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideBar;
