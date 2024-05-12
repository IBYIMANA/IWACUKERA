import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const History = () => {
  

  

  return (
    <div>
       <h1 className='float-left ml-40 font-bold capitalize'>IWACU KERA</h1>
      <div className="fixed z-10 flex flex-col items-center justify-center w-full gap-10 py-4 mt-20 lg:pr-40 lg:pl-40 lg:flex-row">
     
        <NavLink to={'/history/museum'} className="nav-link hover:text-neutral-400" >MUSEUM</NavLink>
        <NavLink to={'/history/abami'} className="nav-link hover:text-neutral-400" >ABAMI</NavLink>
        <NavLink to={'/history/imikino'} className="nav-link hover:text-neutral-400" >IMIKINO</NavLink>
        <NavLink to={'/history/imigani'} className="nav-link hover:text-neutral-400" >IMIGANI</NavLink>
      </div>
      
    </div>
  );
};

export default History;
