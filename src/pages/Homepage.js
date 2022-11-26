import React from 'react';
import Footer from '../components/footer/Footer';
import Homepage1 from '../components/homepage/Homepage1';
import HomePage2 from '../components/homepage/HomePage2';
import Homepage3 from '../components/homepage/Homepage3';
import Homepage4 from '../components/homepage/Homepage4';
import Homepage5 from '../components/homepage/Homepage5';
import Homepage6 from '../components/homepage/Homepage6';

const Homepage = () => {
  return (
    <div className='h-screen'>
      <Homepage1 />
      <HomePage2 />
      <Homepage3 />
      <Homepage4 />
      <Homepage5 />
      <Homepage6 />
      <Footer />
    </div>
  );
};

export default Homepage;
