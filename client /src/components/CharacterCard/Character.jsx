import React from 'react';
import CardLoading from '../CardLoading';
import { useCharacterDetails } from '../../hooks/useCharacter';

const Character = ({ char }) => {
  const { character, homeworld, species, films, characterLoading, homeworldLoading, speciesLoading, error } =
    useCharacterDetails(char.uid);

  // loading
  if (characterLoading) return <CardLoading />;
  if (error?.error === 'No characters found') {
    return <p>No characters found for your search.</p>;
  }

  return (
    <div
      key={char.uid}
      className="bg-white/10 border border-white/20 rounded-xl p-6 text-center text-white hover:scale-105 transition-transform duration-300 shadow-lg backdrop-blur-md min-h-[400px] flex flex-col justify-between"
    >
      {/* Character Name Title */}
      <h2 className="text-xl font-semibold text-yellow-300 mb-4">{character?.properties.name}</h2>

      <div className="space-y-2 text-sm text-gray-300">
        <p>
          <span className="text-yellow-400">Height:</span> {character?.properties.height} cm
        </p>
        <p>
          <span className="text-yellow-400">Gender:</span> {character?.properties.gender}
        </p>
        {homeworldLoading ? (
          <>
            {' '}
            <div className="col-span-1 h-2 rounded bg-gray-200 opacity-[0.4]"></div>
          </>
        ) : (
          <p>
            <span className="text-yellow-400">Homeworld:</span> {homeworld?.properties?.name}
          </p>
        )}
        {homeworldLoading ? (
          <>
            {' '}
            <div className="col-span-1 h-2 rounded bg-gray-200 opacity-[0.4]"></div>
          </>
        ) : (
          <p>
            <span className="text-yellow-400">Species:</span> {species?.properties.classification || 'unknown'}
          </p>
        )}
        {speciesLoading ? (
          <>
            {' '}
            <div className="col-span-2 h-2 rounded bg-gray-200"></div>
          </>
        ) : (
          <p>
            <span className="text-yellow-400">Race:</span> {species?.properties.name || 'unknown'}
          </p>
        )}
      </div>

      {films?.length > 0 && (
        <div className="mt-4">
          <p className="text-yellow-400 font-medium">Appeared In:</p>
          <ul className="list-disc list-inside text-sm text-gray-200 mt-1 space-y-1">
            {films.map((film) => (
              <li key={film.uid}>{film.properties.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Character;
