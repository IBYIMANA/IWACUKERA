import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const History = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (link) => {
    setActiveLink(link === activeLink ? null : link);
  };

  return (
    <div>
       <h1 className='font-bold capitalize float-left ml-40'>IWACU KERA</h1>
      <div className="fixed mt-10 justify-center w-full bg-white z-10 py-4 px-8 lg:pr-40 lg:pl-40 flex flex-col lg:flex-row items-center gap-10 ">
     
        <NavLink to={'/history/museum'} className="nav-link hover:text-neutral-400" onClick={() => handleLinkClick('museum')}>MUSEUM</NavLink>
        <NavLink to={'/history/abami'} className="nav-link  hover:text-neutral-400" onClick={() => handleLinkClick('abami')}>ABAMI</NavLink>
        <NavLink to={'/history/imikino'} className="nav-link  hover:text-neutral-400" onClick={() => handleLinkClick('imikino')}>IMIKINO</NavLink>
        <NavLink to={'/history/imigani'} className="nav-link  hover:text-neutral-400" onClick={() => handleLinkClick('imigani')}>IMIGANI</NavLink>
      </div>

      <div className="pt-20">
        {activeLink === 'museum' && (
          <div>
            {/* Content for MUSEUM */}
            <h2>MUSEUM</h2>
            {/* Add your content here */}
          </div>
        )}
        {activeLink === 'abami' && (
          <div>
            {/* Content for ABAMI */}
            <h2>ABAMI</h2>
            {/* Add your content here */}
          </div>
        )}
        {activeLink === 'imikino' && (
          <div>
            {/* Content for IMIKINO */}
            <h2>IMIKINO</h2>
            {/* Add your content here */}
          </div>
        )}
        {activeLink === 'imigani' && (
          <div>
            {/* Content for IMIGANI */}
            <h2>IMIGANI</h2>
            {/* Add your content here */}
          </div>
        )}
      </div>
    </div>
  );
};

export default History;
