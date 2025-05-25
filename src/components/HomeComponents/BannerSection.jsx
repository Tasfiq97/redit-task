import React from 'react';
import starWarsBg from '/assets/bg.jpg';
const BannerSection = () => {
  return (
    <div
      style={{ backgroundImage: `url(${starWarsBg})` }}
      className="sticky top-0 h-screen bg-cover bg-center z-0 font-orbitron"
    >
      <div className="h-full w-full flex items-center justify-center">
        <div className="absolute inset-0 bg-black/30  z-0"></div>
        <h1 className="text-white text-5xl font-bold relative z-10">Explore Star Wars</h1>
      </div>
    </div>
  );
};

export default BannerSection;
