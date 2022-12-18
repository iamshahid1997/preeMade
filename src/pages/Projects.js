import React from 'react';
import PageHeader from '../components/commons/PageHeader';
import Footer from '../components/footer/Footer';
import Project1 from '../components/projects/Projects1';

const Aboutus = () => {
  return (
    <div className='h-screen'>
      <PageHeader title='Projects' />
      <Project1 />
      <Footer />
    </div>
  );
};

export default Aboutus;
