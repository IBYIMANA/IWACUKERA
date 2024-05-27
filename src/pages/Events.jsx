import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SubNav from '../Components/SubNav';

const Events = () => {
    const [eventList, setEventList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchEventList();
    }, []);

    const fetchEventList = async () => {
        try {
            console.log('Fetching event list');
            const response = await axios.get('https://iwacu-kera-backend-1.onrender.com/api/events/listevents');
            console.log('API Response:', response.data);
            setEventList(response.data.task); // Accessing 'task' array from response
        } catch (error) {
            console.error('Error fetching data:', error);
            setError('Failed to fetch event data');
        } finally {
            setLoading(false);
        }
    };
    

    return (
        <div>
            <div className='h-screen px-10 py-40'>
                <h1 className='text-2xl font-bold text-center text-black '>Events</h1>
                {loading ? (
                    <p className="text-center text-gray-700">Loading...</p>
                ) : error ? (
                    <p className="text-center text-red-700">{error}</p>
                ) : eventList.length > 0 ? (
                    <div className="grid grid-cols-2 gap-4 mt-40">
                        {eventList.map(event => (
                            <div key={event._id} className="p-4 text-black bg-white rounded-lg shadow-md">
                                <h2 className="mb-2 text-lg font-semibold">{event.title}</h2>
                                <p className="text-gray-700">{event.description}</p>
                                <p className="mt-2 text-gray-500">{event.date}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-700">No events found</p>
                )}
            </div>
        </div>
    );
};

export default Events;
