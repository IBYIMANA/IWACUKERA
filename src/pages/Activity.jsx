import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
function Activity() {
  return (
    <div>
       <div className="  mt-20 justify-center items-center ml-[80%]  ">
      <Link to ='/addevent'
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 items-end  text-white py-2 px-4 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
        >
          Add Event
        </Link>
      </div>
      <div className='flex space-x-0'>
       
        <div className='flex flex-col gap-8  ml-20 w-96 mt-10  bg-cyan-50 h-90'>
        <div>
        <motion.h1 initial={{ opacity: 0, x:100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }} className='mt-10 mb-4 ml-7 text-center text-3xl font-bold'>01/01/2024</ motion.h1>
        < motion.p initial={{ opacity: 0, x:100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }} className='text-center'> Kwita Izina</motion.p>
        </div>
        < motion.img src="../public/intore.jpeg" alt="" initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
         className='w-full ' />
      
        </div>
        <div className='flex flex-col gap-8  ml-20 w-96 mt-10  bg-gray-100 h-90'>
        <div>
        <motion.h1 initial={{ opacity: 0, x:100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }} className='mt-10 mb-4 ml-7 text-center text-3xl font-bold'>01/01/2024</ motion.h1>
        < motion.p initial={{ opacity: 0, x:100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }} className='text-center'> Kwita Izina</motion.p>
        </div>
        < motion.img src="../public/ibwami.jpg" alt="" initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
         className='w-full ' />
      
        </div>
        <div className='flex flex-col gap-8  ml-20 w-96 mt-10  bg-slate-200 h-90'>
        <div>
        <motion.h1 initial={{ opacity: 0, x:100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }} className='mt-10 mb-4 ml-7 text-center text-3xl font-bold'>01/01/2024</ motion.h1>
        < motion.p initial={{ opacity: 0, x:100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }} className='text-center'> Kwita Izina</motion.p>
        </div>
        < motion.img src="../public/gorillar.jpg" alt="" initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
         className='w-full ' />
      
        </div>
        </div>
      </div>
   
  )
}

export default Activity