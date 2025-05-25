import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col  text-white ">
      <Navbar />

      <main className="flex-grow container max-w-full ">{children}</main>

      <Footer />
    </div>
  );
};

export default MainLayout;
