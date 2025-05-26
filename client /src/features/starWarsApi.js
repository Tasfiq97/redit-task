import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const url = import.meta.env.VITE_SERVER_URL;
export const starWarsApi = createApi({
  reducerPath: 'starWarsApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${url}` }),
  endpoints: (builder) => ({
    getCharacters: builder.query({
      query: ({ currentPage, search }) => {
        if (search) {
          return `people/?name=${search}`;
        }
        return `people/?page=${currentPage}&limit=10`;
      },
      transformResponse: (response) => {
        return response;
      },
      transformErrorResponse: (response) => {
        if (response.status === 404) {
          return { error: 'No characters found' };
        }
      },
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
