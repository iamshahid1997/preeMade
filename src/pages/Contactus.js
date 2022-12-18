import React from 'react';
import PageHeader from '../components/commons/PageHeader';
import Contactus2 from '../components/contactus/Contactus2';
import Footer from '../components/footer/Footer';

const Contactus = () => {
  return (
    <div className='h-screen'>
      <PageHeader title='Conctact Us' />
      <Contactus2 />
      <Footer />
    </div>
  );
};

export default Contactus;
