import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto'; 
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [imiganiLength, setImiganiLength] = useState(0);
  const [eventsLength, setEventsLength] = useState(0);
  const [mediaLength, setMediaLength] = useState(0);

  useEffect(() => {
    fetchCounts();
  }, []);

  const fetchCounts = async () => {
    try {
      const [imiganiResponse, eventsResponse, mediaResponse] = await Promise.all([
        axios.get('https://iwacu-kera-backend-1.onrender.com/api/pro/list'),
        axios.get('https://iwacu-kera-backend-1.onrender.com/api/events/listevents'),
        axios.get('https://iwacu-kera-backend-1.onrender.com/api/media/list')
      ]);

      setImiganiLength(imiganiResponse.data.length);
      setEventsLength(eventsResponse.data.task.length); 
      setMediaLength(mediaResponse.data.length);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Imigani',
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        pointBackgroundColor: 'rgba(54, 162, 235, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255, 99, 132, 1)',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Events',
        data: [eventsLength], 
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        pointBackgroundColor: 'rgba(75, 192, 192, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(54, 162, 235, 1)',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Media',
        data: [30, 20, 60, 50, 70, 90, 100],
      
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        pointBackgroundColor: 'rgba(255, 99, 132, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(75, 192, 192, 1)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Content Engagement Over Time',
      },
    },
    elements: {
      line: {
        tension: 0.4, 
      },
      point: {
        radius: 5, 
        hoverRadius: 7, 
      },
    },
  };

  return (
    <div className="p-4">
      <div className="flex gap-8 justify-center mb-4 mr-1">
        <div className="bg-blue-400 h-40 w-60 shadow-lg rounded-lg flex justify-center items-center">
<Link to='/proverb'>
          <h1 className="font-bold text-white text-4xl">{imiganiLength}</h1>
          <span className="text-white text-xl ml-2">Imigani</span></Link>
        </div>
        <div className="bg-cyan-200 h-40 w-60 shadow-lg rounded-lg flex justify-center items-center">
          <Link to='/activity'>
          <h1 className="font-bold text-gray-900 text-4xl">{eventsLength}</h1>
          <span className="text-gray-900 text-xl ml-2">Events</span></Link>
        </div>
        
        <div className="bg-red-900 h-40 w-60 shadow-lg rounded-lg flex justify-center items-center">
        <Link to='/Med'>
          <h1 className="font-bold text-white text-4xl">{mediaLength}</h1>
          <span className="text-white text-xl ml-2">Media</span></Link>
        </div>
      </div>
      <div className="bg-white p-4 h-[80%] w-full lg:w-2/3 mx-auto rounded-lg shadow-md">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}

export default Dashboard;
