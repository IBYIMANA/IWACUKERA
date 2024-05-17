import React from "react";
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from "react-router-dom";
const Proverb = () => {
  
  return (
    <>
     <div>
      <div className="  mt-20 justify-center items-center ml-[80%]  ">
      <Link to ='/addproverb'
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 items-end  text-white py-2 px-4 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
        >
          Add Proverb
        </Link>
      </div>
     
    <div className='flex flex-col sm:flex-row gap-2 sm:gap-12 bg-gray-100 mt-10 ml-20 shadow-lg rounded-lg  h-96 md:gap-16 lg:gap-20 xl:gap-24 pt-20  sm:pr-12 sm:pl-12 md:pr-24 md:pl-24  '>
                    <div className="container mx-auto">
                    <div className="overflow-x-auto">
      <table className="table-auto border-collapse border pb-20 border-gray-500 w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-500 text-blue-400 p-2">Title</th>
            <th className="border border-gray-500 p-2 text-blue-400">Content</th>
            <th className="border border-gray-500 p-2 text-blue-400">Origin</th>
            <th className="border border-gray-500 p-2 text-blue-400">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-black p-2">Title</td>
            <td className="border border-black p-2">Content</td>
            <td className="border border-black p-2">Origin</td>
            <td className="border border-black p-2 justify-between">
              <button className="mr-2"><FaEdit /></button>
              <button><FaTrash /></button>
            </td>
          </tr>
         
        </tbody>
      </table>
    </div>
                    </div>
                    </div>
</div>
    </>
  );
};
export default Proverb
