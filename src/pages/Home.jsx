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
      <div className='flex justify-between mt-6 '>
        <div className={`image-container ${slideInAnimation1}`} style={imageContainerStyle} >
          <img src=".././public/ibiseke.jpeg" alt=""  />
        </div>
        <div className={`image-container ${slideInAnimation2}`} style={imageContainerStyle}>
          <img src=".././public/intore.jpeg" alt=""  />
        </div>
      </div>
      <div>
        <h1 className='text-black font-medium capitalize text-6xl hover:text-neutral-500 transition duration-300 text-center mt-12 mb-16'> Tourism</h1>
      </div>
      <div className="flex justify-between pr-36 pl-36">
        <div className="w-1/2 group animate-fade-in ">
          <img src=".././public/inzu.jpg" alt="" className="w-full h-auto rounded-md shadow-lg transition duration-300 transform hover:scale-105 mb-8" />
        </div>
        <div className="w-1/2 justify-center items-start ml-8 mt-20">
          <p className="text-lg text-gray-800 leading-relaxed animate-fade-in">
            u Rwanda nikimwe mubihugu kw'isi gitangaje, cyane cyane kizwiho ko ari igihugu cy'imisozi igihumbi. Abantu batandukanye bo mubihugu bitandukajye basangiza inshuti zabo ibyiza bitatse u Rwanda, bimwe muribyo harimo ibinyabuzima bitangaje byibera mubirunga, amashyamba meza atangaje nka nyungwe forest, ibiyaga n'ibibaya.
          </p>
        </div>
      </div>
      <footer className="bg-gray-800 text-white py-4 text-center">
        &copy; 2024 IwacuKera. All Rights Reserved.
      </footer>
    </div>
  );
};

export default Home;
