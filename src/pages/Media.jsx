import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Media = () => {
    const [mediaList, setMediaList] = useState([]);
    

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
        <div>
            <div className='h-screen px-10 py-10 '>
                <h1 className='mb-20 font-extrabold text-black'> Media </h1>
                    <div className="grid grid-cols-2 gap-4 mt-40 ">
                        {mediaList.map(media => (
                            <div key={media._id} className="p-4 bg-white rounded-lg shadow-md">
                                <h2 className="mb-2 text-lg font-semibold">{media.title}</h2>
                                <p className="text-gray-700">Link: {media.link}</p>
                                <p className="mt-2 text-gray-500">Description: {media.description}</p>
                                <p className="mt-2 text-gray-500">Type: {media.type}</p>
                                <p className="mt-2 font-bold text-gray-500">Owner: {media.owner}</p>
                            </div>
                        ))}
                    </div>
            </div>
        </div>
    );
};

export default Media;
