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
    <div>
      <div>
<div className='absolute mt-48 text-center ml-[600px] animate-fade-in'>
          <h1 className='px-6 py-3 space-x-6 text-3xl font-medium text-black duration-300 bg-orange-600 border rounded-lg shadow-lg hover:bg-blue-600 hover:text-white border-spacing-x-52 animate-scale-up'> IWACU-KERA <span className="animate-text-color-change">Rwanda</span></h1>
        </div>
        <div className='flex justify-between mt-6 '>
          <div className={`image-container ${slideInAnimation1}`} style={imageContainerStyle} >
            <img src=".././public/ibiseke.jpeg" alt="" />
          </div>
          <div className={`image-container ${slideInAnimation2}`} style={imageContainerStyle}>
            <img src=".././public/intore.jpeg" alt="" />
          </div>
        </div>
      </div>
      <div className='mb-20'>
        <h1 className='mt-12 mb-4 text-6xl font-medium text-center text-black capitalize transition duration-300 hover:text-neutral-500'> Tourism</h1>
        <div className="flex justify-center">
          <p className="h-1 mb-1 bg-orange-500" style={{ width: '4%' }}></p>
        </div>
        <div className="flex justify-center">
          <p className="h-1 bg-orange-500" style={{ width: '2%' }}></p>
        </div>
      </div>


      <div className="flex justify-between pr-36 pl-36 ">
        <div className="relative w-1/2 group animate-fade-in ">
          <img src=".././public/forest1.jpg" alt="" className="w-full h-auto mt-1 mb-0 transition duration-300 transform border rounded-md shadow-lg hover:scale-105" />

          <div className="absolute top-0 w-1/2 group animate-fade-in ">
            <img src=".././public/intore.jpeg" alt="" className="w-full h-auto mt-1 mb-0 transition duration-300 transform border rounded-md shadow-lg hover:scale-105" />
          </div>
        </div>

        <div className="items-start justify-center w-1/2 mt-20 ml-8">
          <p className="text-lg leading-relaxed text-gray-800 animate-fade-in">
            Rwanda is one of the most amazing countries in the world, especially known as the land of a thousand mountains. Different people from different countries share with their friends the beauty of Rwanda, some of which include the amazing wildlife that lives in the mountains, beautiful and amazing forests like Nyungwe forest, lakes and plains.
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
