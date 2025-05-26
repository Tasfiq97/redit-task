import React, { useState } from 'react';
import starWarsBg from '/assets/char.jpg';

import { useGetCharactersQuery } from '../features/starWarsApi';
import Loading from '../components/Loading';
import Pagination from '../components/Pagination';
import Card from '../components/Card';
const CharactersPage = () => {
  const [searchInput, setSearchInput] = useState('');
  const [search, setSearch] = useState('');

  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = () => {
    setSearch(searchInput);
  };

  const { data, error, isLoading } = useGetCharactersQuery({ currentPage, search });

  if (isLoading) return <Loading />;
  if (error) return <p className="text-red-500">Error fetching characters.</p>;
  const totalPages = data?.total_pages || 1;

  return (
    <div
      style={{ backgroundImage: `url(${starWarsBg})` }}
      className="sticky top-0 h-screen bg-cover bg-center z-0 font-orbitron"
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-0"></div>

      <div className="relative z-10 h-full w-full flex flex-col items-center justify-center px-4 py-6">
        <div className=" mt-15  w-full max-w-4xl mb-4 flex">
          <input
            type="text"
            value={searchInput}
            placeholder="Search characters..."
            onChange={(e) => setSearchInput(e.target.value)}
            className="w-full max-w-4xl px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button
            onClick={handleSearch}
            className="px-6 py-3 bg-yellow-400 text-black font-bold rounded-sm hover:bg-yellow-300 transition duration-300 shadow-lg cursor-pointer"
          >
            Search
          </button>
        </div>

        <Card data={data} currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
      </div>
    </div>
  );
};

export default CharactersPage;
