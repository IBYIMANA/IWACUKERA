import React from 'react'

const Navbar = () => {
  return (
    <div>
         <nav className='fixed flex items-center justify-between w-full h-20 ml-12 text-white bg-black'>
        <ul className="flex mr-3 space-x-4">
          <li><a href="/" className="font-extrabold text-white ">Home</a></li>
          <li><a href="/Course" className="font-extrabold text-white ">Course</a></li>
          <li><a href="/History" className="font-extrabold text-white ">History</a></li>
          <li><a href="/Events" className="font-extrabold text-white ">Events</a></li>
          <li><a href="/Contact" className="font-extrabold text-white ">Contact</a></li>
        </ul>
      </nav>
    </div>
   
  )
}

export default Navbar