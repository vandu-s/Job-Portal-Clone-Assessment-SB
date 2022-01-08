import React from 'react';
import Banner from '../Banner/Banner';
import './Layout.scss';

const Layout = ({ children }) => {
  return (
    <div>
      <div className="layout_main_container">{children}</div>
    </div>
  );
};

export default Layout;
