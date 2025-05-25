import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const starWarsApi = createApi({
  reducerPath: 'starWarsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.swapi.tech/api/' }),
  endpoints: (builder) => ({
    getCharacters: builder.query({
      query: (page) => `people/?page=${page}&limit=10`,
    }),
    getCharacterById: builder.query({
      query: (id) => `people/${id}`,
    }),

    getPlanetsById: builder.query({
      query: (id) => `planets/${id}`,
    }),
    getSpeciesById: builder.query({
      query: (id) => `species/${id}`,
    }),
    getAllFilms: builder.query({
      query: () => `films`,
    }),
    getFilmById: builder.query({
      query: (id) => `films/${id}`,
    }),
  }),
});

export const {
  useGetCharactersQuery,
  useGetCharacterByIdQuery,
  useGetPlanetsByIdQuery,
  useGetSpeciesByIdQuery,
  useGetAllFilmsQuery,
  useGetFilmByIdQuery,
} = starWarsApi;
