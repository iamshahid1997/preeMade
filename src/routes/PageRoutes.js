import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ScrollToTop from '../components/commons/ScrollToTop';
import Homepage from '../pages/Homepage';

function PageRoutes() {
  return (
    <>
      <ScrollToTop />
      {' '}
      {/* get to the top of the page when we switch between pages */}
      <Routes>
        <Route exact path="/" element={<Homepage />} />
      </Routes>
    </>
  );
}

export default PageRoutes;