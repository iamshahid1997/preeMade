import React from 'react';
import Aboutus2 from '../components/aboutus/AboutUs2';
import Aboutus4 from '../components/aboutus/Aboutus4';
import PageHeader from '../components/commons/PageHeader';
import Footer from '../components/footer/Footer';

const Aboutus = () => {
  return (
    <div className='h-screen'>
      <PageHeader title = "About Us" />
      <Aboutus2 />
      <Aboutus4 />
      <Footer />
    </div>
  );
};

export default Aboutus;
