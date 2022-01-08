import React from 'react';
import Banner from '../Banner/Banner';
import './Layout.scss';

const Layout = ({ children }) => {
  return (
    <div className="layout_main_container">
      <Banner />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
