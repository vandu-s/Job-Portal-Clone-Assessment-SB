import React from 'react';
import Banner from '../Banner/Banner';

const Layout = ({ children }) => {
  return (
    <div>
      <Banner />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
