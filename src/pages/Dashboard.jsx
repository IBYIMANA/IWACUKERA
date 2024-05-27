import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto'; // Import Chart.js for the auto registration of elements

const Dashboard = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Imigani',
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        pointBackgroundColor: 'rgba(255, 99, 132, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255, 99, 132, 1)',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Events',
        data: [28, 48, 40, 19, 86, 27, 90],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        pointBackgroundColor: 'rgba(54, 162, 235, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(54, 162, 235, 1)',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Media',
        data: [30, 20, 60, 50, 70, 90, 100],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        pointBackgroundColor: 'rgba(75, 192, 192, 1)',
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
        tension: 0.4, // Adds curvature to the lines
      },
      point: {
        radius: 5, // Radius of the points
        hoverRadius: 7, // Radius of the points on hover
      },
    },
  };

  return (
    <div className="p-4">
      <div className="flex gap-8 justify-center mb-4">
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
      <div className="bg-white p-4 h-[80%] w-full lg:w-2/3 mx-auto rounded-lg shadow-md">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}

export default Dashboard;
