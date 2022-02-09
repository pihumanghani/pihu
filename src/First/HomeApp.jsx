import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Navbar from './Navbar';

const HomeApp = () => {
  return (
  <>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
  </>
  );
};

export default HomeApp;
