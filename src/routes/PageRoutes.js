import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ScrollToTop from '../components/commons/ScrollToTop';
import Aboutus from '../pages/Aboutus';
import Contactus from '../pages/Contactus';
import Homepage from '../pages/Homepage';
import Projects from '../pages/Projects';

function PageRoutes() {
  return (
    <>
      <ScrollToTop />
      {' '}
      {/* get to the top of the page when we switch between pages */}
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default PageRoutes;