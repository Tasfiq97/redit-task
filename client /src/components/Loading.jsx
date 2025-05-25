import React from 'react';

const Loading = () => {
  return (
    <div className="w-screen h-screen bg-black text-yellow-400 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#fff3,transparent_1px)] bg-[size:4px_4px] animate-pulse opacity-30" />

      <div className="z-10 text-center animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-extrabold font-orbitron tracking-widest">STAR WARS</h1>
        <p className="mt-4 text-lg md:text-xl font-light">Loading Galactic Data...</p>
      </div>
    </div>
  );
};

export default Loading;
