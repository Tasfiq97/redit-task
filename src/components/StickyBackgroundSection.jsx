import React from 'react';
import starWarsImage from '/assets/star-wars.jpg';
import starWarsBg from '/assets/bg.jpg';
import starWarsActors from '/assets/actors.jpg';

const StickyBackgroundSection = () => {
  return (
    <div>
      <div style={{ backgroundImage: `url(${starWarsBg})` }} className="sticky top-0 h-screen bg-cover bg-center z-0 ">
        <div className="h-full w-full flex items-center justify-center">
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-0"></div>
          <h1 className="text-white text-5xl font-bold relative z-10">Explore Star Wars</h1>
        </div>
      </div>

      <div
        style={{ backgroundImage: `url(${starWarsImage})` }}
        className="sticky top-0 h-screen bg-cover bg-center z-0"
      >
        <div className="h-full w-full flex items-center justify-center">
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-0"></div>
          <h1 className="text-white text-5xl font-bold relative z-10">
            {' '}
            This content scrolls over the sticky background image. Scroll down to see more sections.
          </h1>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${starWarsActors})` }}
        className="sticky top-0 h-screen bg-cover bg-center z-0"
      >
        <div className="h-full w-full flex items-center justify-center">
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-0"></div>
          <h1 className="text-white text-5xl font-bold relative z-10"> More scrollable content below.</h1>
        </div>
      </div>
    </div>
  );
};

export default StickyBackgroundSection;
