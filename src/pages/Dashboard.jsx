import React from 'react';
import { Bar } from 'react-chartjs-2';

const Dashboard = () => {
  const data = {
    labels: ['Imigani', 'Events',  'Media'],
    datasets: [
      {
        label: 'Fully Rounded',
        data: [-20, 40, 60, -30, 50, -10, 30],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderWidth: 2,
        borderRadius: Number.MAX_VALUE,
        borderSkipped: false,
      },
      {
        label: 'Small Radius',
        data: [10, -30, 50, -20, 40, -5, 25],
        borderColor: 'rgb(54, 162, 235)',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderWidth: 2,
        borderRadius: 5,
        borderSkipped: false,
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Analytical chart',
      },
    },
  };

  return (
    <div className="p-4">
      <div className="flex gap-8 h-72 w-full mb-4 justify-center">
        <div className="bg-blue-400 h-40 w-60 shadow-lg rounded-lg flex justify-center items-center">
          <h1 className="font-medium text-white">IMIGANI</h1>
        </div>
        <div className="bg-cyan-200 h-40 w-60 shadow-lg rounded-lg flex justify-center items-center">
          <h1 className="font-medium text-gray-900">EVENTS</h1>
        </div>
        <div className="bg-red-900 h-40 w-60 shadow-lg rounded-lg flex justify-center items-center">
          <h1 className="font-medium text-white">MEDIA</h1>
        </div>
      </div>
      <div className="bg-white p-4 h-[100%]  w-[80%] rounded-lg shadow-md">
        <Bar data={data} options={options} className=' h-48' />
      </div>
    </div>
  );
}

export default Dashboard;
