import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SubNav from '../Components/SubNav';

const Imigani = () => {
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
    <div>
      <SubNav />
      <div className='h-screen bg-gray-50 py-10 px-4 md:px-10'>
        <h1 className='text-white text-center mb-5 text-2xl font-bold'>Imigani</h1>
        <div className='overflow-x-auto'>
          <table className='min-w-full bg-white mt-[5%] rounded-lg shadow-md'>
            <thead>
              <tr className='bg-gray-200'>
                <th className='px-4 py-2 text-left text-gray-700'>Title</th>
                <th className='px-4 py-2 text-left text-gray-700'>Content</th>
                <th className='px-4 py-2 text-left text-gray-700'>Origin</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(proverbs) && proverbs.map(proverb => (
                <tr key={proverb._id} className='border-t border-gray-200'>
                  <td className='px-4 py-2'>{proverb.title}</td>
                  <td className='px-4 py-2'>{proverb.content}</td>
                  <td className='px-4 py-2'>{proverb.origin}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Imigani;
