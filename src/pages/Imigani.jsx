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
            <div className='h-screen px-10 py-10 bg-red-400'>
                <h1 className='mb-5 text-center text-white'>Imigani</h1>
                <div className="grid grid-cols-3 gap-4 mt-40 bg-slate-300">
                    {Array.isArray(proverbs) && proverbs.map(proverb => (
                        <div key={proverb._id} className="p-4 bg-white rounded-lg shadow-md">
                            <h2 className="mb-2 text-lg font-semibold">{proverb.title}</h2>
                            <p className="text-gray-700">{proverb.content}</p>
                            <p className="mt-2 text-gray-500">Origin: {proverb.origin}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


export default Imigani;
