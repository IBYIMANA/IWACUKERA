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
          className="items-end px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400"
        >
          Add Proverb
        </Link>
      </div>
     
    <div className='flex flex-col gap-2 pt-20 mt-10 ml-20 bg-gray-100 rounded-lg shadow-lg sm:flex-row sm:gap-12 h-96 md:gap-16 lg:gap-20 xl:gap-24 sm:pr-12 sm:pl-12 md:pr-24 md:pl-24 '>
                    <div className="container mx-auto">
                    <div className="overflow-x-auto">
      <table className="w-full pb-20 border border-collapse border-gray-500 table-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 text-blue-400 border border-gray-500">Title</th>
            <th className="p-2 text-blue-400 border border-gray-500">Content</th>
            <th className="p-2 text-blue-400 border border-gray-500">Origin</th>
            <th className="p-2 text-blue-400 border border-gray-500">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border border-black">Title</td>
            <td className="p-2 border border-black">Content</td>
            <td className="p-2 border border-black">Origin</td>
            <td className="justify-between p-2 border border-black">
              <Link to="/EditProverb"><button className="mr-2"><FaEdit /></button></Link>
              
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
