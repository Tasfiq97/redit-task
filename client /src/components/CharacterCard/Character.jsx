import React from 'react';

const Character = ({ char }) => {
  return (
    <div
      key={char.id}
      className="bg-white/10 border border-white/20 rounded-xl p-4 text-center text-white hover:scale-105 transition-transform duration-300 shadow-lg backdrop-blur-md h-full"
    >
      <img
        src={char.image}
        alt={char.name}
        className="w-full h-16 sm:h-40 md:h-44 lg:h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-base sm:text-lg font-semibold font-orbitron">{char.name}</h3>
    </div>
  );
};

export default Character;
