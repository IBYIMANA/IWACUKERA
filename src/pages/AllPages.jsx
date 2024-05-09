import React from 'react'
import NavBar from '../Components/Navbar';


import { Outlet } from 'react-router-dom'
const AllPages = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}


export default AllPages
