import React from 'react'
import { NavLink } from 'react-router-dom'
const SubNav = () => {
  return (
    <div>
         <h1 className='float-left ml-40 font-bold capitalize'>IWACU KERA</h1>
        <div className="fixed z-10 flex flex-col items-center justify-center w-full  bg-slate-100 shadow-lg rounded-lg gap-10 py-4 mt-20 lg:pr-40 lg:pl-40 lg:flex-row">
     
     <NavLink to={'/history/museum'} className={({ isActive }) => isActive ? 'text-white bg-blue-300 px-3 py-2 rounded-md' : 'text-black px-3 py-2 rounded-md'}>MUSEUM</NavLink>
     <NavLink to={'/history/abami'} className={({ isActive }) => isActive ? 'text-white bg-blue-300 px-3 py-2 rounded-md' : 'text-black px-3 py-2 rounded-md'} >ABAMI</NavLink>
     <NavLink to={'/history/imikino'} className={({ isActive }) => isActive ? 'text-white bg-blue-300 px-3 py-2 rounded-md' : 'text-black px-3 py-2 rounded-md'} >IMIKINO</NavLink>
     <NavLink to={'/history/imigani'} className={({ isActive }) => isActive ? 'text-white bg-blue-300 px-3 py-2 rounded-md' : 'text-black px-3 py-2 rounded-md'} >IMIGANI</NavLink>
   </div>
    </div>
  )
}

export default SubNav