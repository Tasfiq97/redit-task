import React, { useState } from 'react';
import starWarsBg from '/assets/char.jpg';
import Character from '../components/CharacterCard/Character';
import { useGetCharactersQuery } from '../features/starWarsApi';
import Loading from '../components/Loading';
const CharactersPage = () => {
  const characters = [
    { id: '1', name: 'Luke Skywalker', image: '/assets/luke.jpg' },
    { id: '2', name: 'Leia Organa', image: '/assets/leia.jpg' },
    { id: '3', name: 'Darth Vader', image: '/assets/vader.jpg' },
    { id: '4', name: 'Yoda', image: '/assets/yoda.jpg' },
    { id: '5', name: 'Yoda', image: '/assets/yoda.jpg' },
    { id: '6', name: 'Yoda', image: '/assets/yoda.jpg' },
    { id: '7', name: 'Yoda', image: '/assets/yoda.jpg' },
    { id: '8', name: 'Yoda', image: '/assets/yoda.jpg' },
    { id: '9', name: 'Yoda', image: '/assets/yoda.jpg' },
    { id: '10', name: 'Yoda', image: '/assets/yoda.jpg' },
    { id: '11', name: 'Yoda', image: '/assets/yoda.jpg' },
    { id: '12', name: 'Yoda', image: '/assets/yoda.jpg' },
    { id: '13', name: 'Yoda', image: '/assets/yoda.jpg' },
    { id: '14', name: 'Yoda', image: '/assets/yoda.jpg' },
    { id: '15', name: 'Yoda', image: '/assets/yoda.jpg' },
    { id: '16', name: 'Yoda', image: '/assets/yoda.jpg' },
    { id: '17', name: 'Yoda', image: '/assets/yoda.jpg' },
    { id: '18', name: 'Yoda', image: '/assets/yoda.jpg' },
    { id: '19', name: 'Yoda', image: '/assets/yoda.jpg' },
    { id: '20', name: 'Yoda', image: '/assets/yoda.jpg' },
  ];
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const { data, error, isLoading } = useGetCharactersQuery();
  console.log('🚀 ~ CharactersPage ~ data:', data);

  if (isLoading) return <Loading />;
  if (error) return <p className="text-red-500">Error fetching characters.</p>;

  const filteredCharacters = characters.filter((char) => char.name.toLowerCase().includes(searchTerm));
  return (
    <div
      style={{ backgroundImage: `url(${starWarsBg})` }}
      className="sticky top-0 h-screen bg-cover bg-center z-0 font-orbitron"
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-0"></div>

      <div className="relative z-10 h-full w-full flex flex-col items-center justify-center px-4 py-6">
        <div className="w-full max-w-3xl mb-4">
          <input
            type="text"
            placeholder="Search characters..."
            onChange={handleSearch}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        {/* Scrollable Cards */}
        <div className="h-[80vh] md:h-[85vh] lg:h-[85vh]  w-full overflow-auto ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-full  mt-2 px-10">
            {data?.results.map((dt) => (
              <Character key={dt.uid} char={dt} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharactersPage;
