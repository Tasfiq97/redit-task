import React from 'react';
import starWarsActors from '/assets/actors.jpg';
import { Link, useNavigate } from 'react-router-dom';
import Character from '../CharacterCard/Character';
import { useGetCharactersQuery } from '../../features/starWarsApi';
const CharacterSection = () => {
  const { data } = useGetCharactersQuery(1);

  const navigate = useNavigate();
  return (
    <div
      className="sticky top-0 h-screen  bg-cover bg-center z-0"
      style={{ backgroundImage: `url(${starWarsActors})` }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0"></div>

      <div className="h-full w-full flex flex-col items-center justify-center px-6 relative z-10">
        <h1 className="text-white text-5xl font-bold mb-8 font-orbitron text-center drop-shadow-lg">
          Meet the Legends
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl w-full">
          {data?.results?.slice(5, 9).map((char) => (
            <Character key={char.id} char={char} />
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => navigate('/characters')}
            className="px-6 py-3 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-300 transition duration-300 shadow-lg cursor-pointer"
          >
            See All Characters
          </button>
        </div>
      </div>
    </div>
  );
};

export default CharacterSection;
