import React from 'react';
import Practice from '../pages/Practice';

const Home = () => {
  return (
    <div className='py-20'>
      <div className='mt-10 mb-0'>
        <video src="./Ancient.mp4" autoPlay loop className='w-full h-30' />
      </div>
      <Practice />
    </div>
  );
};

export default Home;
