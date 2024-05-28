import React, { useState, useEffect } from 'react';
import axios from 'axios';


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
        <div className="min-h-screen bg-gray-50">
         <div className='py-7'>
            <img src="../public/event.png" alt="" className='h-[10%] w-full' />
         </div>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-8"> Upcoming Events</h1>
                {loading ? (
                    <p className="text-center text-gray-700">Loading...</p>
                ) : error ? (
                    <p className="text-center text-red-700">{error}</p>
                ) : eventList.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {eventList.map(event => (
                            <div key={event._id} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                                <h2 className="mb-2 text-xl font-semibold text-gray-900">{event.title}</h2>
                                <p className="text-gray-700">{event.description}</p>
                                <p className="mt-2 text-gray-500">{new Date(event.date).toLocaleDateString()}</p>
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
