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
            const response = await axios.get('https://iwacu-kera-backend-2.onrender.com/api-docs/#/Proverbs/get_api_proverbs__id_');
            console.log(response.data);
            setProverbs(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <SubNav />
            <div className='h-screen bg-red-400 py-10 px-10'>
                <h1 className='text-white text-center mb-5'>Imigani</h1>
                <div className="grid grid-cols-3 gap-4">
                    {Array.isArray(proverbs) && proverbs.map(proverb => (
                        <div key={proverb._id} className="bg-white p-4 rounded-lg shadow-md">
                            <h2 className="text-lg font-semibold mb-2">{proverb.title}</h2>
                            <p className="text-gray-700">{proverb.content}</p>
                            <p className="text-gray-500 mt-2">Origin: {proverb.origin}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Imigani;
