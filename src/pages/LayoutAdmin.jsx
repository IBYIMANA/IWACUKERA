import React from 'react'

import { Outlet } from 'react-router-dom'
import SideBar from '../Components/SideBar';
const LayoutAdmin = () => {
  return (
    <>
       <div className="flex">
      <SideBar />
      <div className="ml-64 p-8 w-full">
        <Outlet />
      </div>
    </div>
    </>
  );
}


export default  LayoutAdmin
