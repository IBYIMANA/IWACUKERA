import React, { useState, useEffect } from 'react';

const Home = () => {
  const [showImages, setShowImages] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImages(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const imageContainerStyle = {
    opacity: showImages ? 1 : 0,
    transition: 'opacity 1s ease-in-out',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  const slideInAnimation1 = showImages ? 'slide-in-1' : '';
  const slideInAnimation2 = showImages ? 'slide-in-2' : '';

  return (

    <div className="container mx-auto px-4">
      <div className="relative text-center mt-48 animate-fade-in">
        <h1 className="text-3xl px-6 py-3 rounded-lg text-black hover:bg-blue-600 hover:text-white duration-300 bg-orange-600 shadow-lg font-medium animate-scale-up inline-block">
          IWACU-KERA <span className="animate-text-color-change">Rwanda</span>
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row  gap-10 mt-6 space-y-4 lg:space-y-0">
        <div className={`image-container ${slideInAnimation1}`} style={imageContainerStyle}>
          <img src="../public/ibiseke.jpeg" alt="Ibiseke" className="w-[200%] max-w-xs h-96 lg:max-w-sm rounded-lg shadow-lg" />


        </div>
        <div className={`image-container ${slideInAnimation2}`} style={imageContainerStyle}>
          <img src="../public/intore.jpeg" alt="Intore" className="w-[200%] max-w-xs h-96 lg:max-w-sm rounded-lg shadow-lg" />
        </div>
      </div>

      <div className="my-20 text-center">
        <h1 className="text-black font-medium capitalize text-4xl lg:text-6xl hover:text-neutral-500 transition duration-300">Tourism</h1>
        <div className="flex justify-center mt-2">
          <div className="bg-orange-500 h-1 w-16 lg:w-20 mb-1"></div>
        </div>
        <div className="flex justify-center">
          <div className="bg-orange-500 h-1 w-8 lg:w-10"></div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-start px-4 lg:px-36 space-y-8 lg:space-y-0">
        <div className="relative w-full lg:w-1/2 group animate-fade-in">
          <img src="../public/forest1.jpg" alt="Forest" className="w-full h-auto rounded-md shadow-lg transition duration-300 transform hover:scale-105" />
          <div className="absolute top-4 left-4 w-1/2 lg:w-1/3 group animate-fade-in">
            <img src="../public/intore.jpeg" alt="Intore" className="w-full h-auto rounded-md shadow-lg transition duration-300 transform hover:scale-105" />
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:ml-8 mt-8 lg:mt-20">
          <p className="text-lg text-gray-800 leading-relaxed animate-fade-in">

            Rwanda is one of the most amazing countries in the world, especially known as the land of a thousand mountains. Different people from different countries share with their friends the beauty of Rwanda, some of which include the amazing wildlife that lives in the mountains, beautiful and amazing forests like Nyungwe forest, lakes and plains.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
