import React from 'react';
import Aboutus1 from '../components/aboutus/Aboutus1';
import Aboutus2 from '../components/aboutus/AboutUs2';
import Aboutus3 from '../components/aboutus/Aboutus3';
import Aboutus4 from '../components/aboutus/Aboutus4';
import Footer from '../components/footer/Footer';

const Aboutus = () => {
  return (
    <div className='h-screen'>
      <Aboutus1 />
      <Aboutus2 />
      <Aboutus3 />
      <Aboutus4 />
      <Footer />
    </div>
  );
};

export default Aboutus;
