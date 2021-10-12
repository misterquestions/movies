import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
