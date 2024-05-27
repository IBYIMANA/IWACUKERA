import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SubNav from '../Components/SubNav';

const Events = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        try {
            const response = await axios.post('https://iwacu-kera-backend-1.onrender.com/api/events/create');
            console.log(response.data);
            setEvents(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
        
            <div className='h-screen px-10 py-40'>
                <h1 className='mb-20 text-2xl font-bold text-center text-black'>Event</h1>
                <div className="grid grid-cols-3 gap-4">
                    {Array.isArray(events) && events.map(event => (
                        <div key={event._id} className="p-4 text-black bg-white rounded-lg shadow-md">
                            <h2 className="mb-2 text-lg font-semibold">{event.title}</h2>
                            <p className="text-gray-700">{event.description}</p>
                            <p className="mt-2 text-gray-500">{event.date}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Events;
