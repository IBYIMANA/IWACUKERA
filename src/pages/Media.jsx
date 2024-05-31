import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ClipLoader } from 'react-spinners'; // Import a spinner component
import 'tailwindcss/tailwind.css'; // Import TailwindCSS for styling

const Media = () => {
  const [mediaList, setMediaList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchMediaList();
  }, []);

  const fetchMediaList = async () => {
    try {
      console.log('Fetching media list');
      const response = await axios.get('https://iwacu-kera-backend-1.onrender.com/api/media/list');
      console.log('API Response:', response.data);
      setMediaList(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Failed to fetch media data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" p-10 bg-gray-50">
      <h1 className="mb-4 text-4xl text-center font-extrabold py-20 text-gray-900">Ibiganiro by'umuco Nyarwanda</h1>
      
      <div className='max-w-7xl mx-auto'>
      {loading ? (
        <div className="flex items-center justify-center h-full">
          <ClipLoader size={50} color="#3498db" />
        </div>
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {mediaList.map(media => (
            <div key={media._id} className="p-6 bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300">
              <h2 className="mb-2 text-xl font-semibold text-gray-800">{media.title}</h2>
              <p className="text-gray-700">Kanda hano urebe ikiganiro: <a href={media.link} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">{media.link}</a></p>
              <p className="mt-2 text-gray-500">Ubusobanuro: {media.description}</p>
              <p className="mt-2 text-gray-500">ubwoko: {media.type}</p>
              <p className="mt-2 font-bold text-gray-700">Owner: {media.owner}</p>
            </div>
          ))}
        </div>
      )}
    </div>

    </div>
  );
};

export default Media;
