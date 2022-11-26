import React from 'react';
import Homepage1 from '../components/homepage/Homepage1';
import HomePage2 from '../components/homepage/HomePage2';
import Homepage3 from '../components/homepage/Homepage3';
import Homepage4 from '../components/homepage/Homepage4';

const Homepage = () => {
  return (
    <div className='h-screen'>
      <Homepage1 />
      <HomePage2 />
      <Homepage3 />
      <Homepage4 />
    </div>
  );
};

export default Homepage;
