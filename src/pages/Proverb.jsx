import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from "react-router-dom";
import axios from 'axios';

const Proverb = () => {
  const [proverbs, setProverbs] = useState([]);

  useEffect(() => {
    fetchProverbs();
  }, []);

  const fetchProverbs = async () => {
    try {
      const response = await axios.get('https://iwacu-kera-backend-1.onrender.com/api/pro/list');
      console.log(response.data);
      setProverbs(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
      <div>
        <div className="mt-20 flex justify-end mr-20">
          <Link to='/addproverb'
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
          >
            Add Proverb
          </Link>
        </div>

        <div className='flex flex-col bg-gray-100 mt-10 mx-20 shadow-lg rounded-lg pt-10'>
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
                  {Array.isArray(proverbs) && proverbs.map(proverb => (
                    <tr key={proverb._id} className="bg-white">
                      <td className="border border-gray-500 p-2">{proverb.title}</td>
                      <td className="border border-gray-500 p-2">{proverb.content}</td>
                      <td className="border border-gray-500 p-2">{proverb.origin}</td>
                      <td className="border border-gray-500 p-2 flex justify-between">
                        <button className="mr-2 text-blue-500 hover:text-blue-700"><FaEdit /></button>
                        <button className="text-red-500 hover:text-red-700"><FaTrash /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Proverb;
