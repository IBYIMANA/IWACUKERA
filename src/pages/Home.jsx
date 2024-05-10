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
          <h1 className='text-3xl px-6 py-3 rounded-lg space-x-6 text-black hover:bg-blue-600 hover:text-white duration-300 bg-orange-600 shadow-lg border border-spacing-x-52 font-medium animate-scale-up'> IWACU-KERA <span className="animate-text-color-change">Rwanda</span></h1>


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
        <h1 className='text-black font-medium capitalize text-6xl hover:text-neutral-500 transition duration-300 text-center mt-12 mb-4'> Tourism</h1>
        <div className="flex justify-center">
          <p className="bg-orange-500 h-1 mb-1" style={{ width: '4%' }}></p>
        </div>
        <div className="flex justify-center">
          <p className="bg-orange-500 h-1" style={{ width: '2%' }}></p>
        </div>
      </div>


      <div className="flex justify-between pr-36 pl-36 ">
        <div className="w-1/2 group animate-fade-in  relative   ">
          <img src=".././public/forest1.jpg" alt="" className="w-full border h-auto rounded-md shadow-lg transition duration-300 transform hover:scale-105 mt-1 mb-0" />

          <div className="w-1/2 group animate-fade-in  absolute top-0   ">
            <img src=".././public/intore.jpeg" alt="" className="w-full border h-auto rounded-md shadow-lg transition duration-300 transform hover:scale-105 mt-1 mb-0" />
          </div>
        </div>

        <div className="w-1/2 justify-center items-start ml-8 mt-20">
          <p className="text-lg text-gray-800 leading-relaxed animate-fade-in">
            Rwanda is one of the most amazing countries in the world, especially known as the land of a thousand mountains. Different people from different countries share with their friends the beauty of Rwanda, some of which include the amazing wildlife that lives in the mountains, beautiful and amazing forests like Nyungwe forest, lakes and plains.
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
