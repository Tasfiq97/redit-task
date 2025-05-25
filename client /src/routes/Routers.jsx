import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CharactersPage from '../pages/CharactersPage';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/characters" element={<CharactersPage />} />
    </Routes>
  );
};

export default Routers;
