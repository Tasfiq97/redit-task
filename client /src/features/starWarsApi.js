import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const starWarsApi = createApi({
  reducerPath: 'starWarsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.swapi.tech/api/' }),
  endpoints: (builder) => ({
    // getCharacters: builder.query({
    //   query: ({ currentPage, search }) => `people/?page=${currentPage}&limit=10&name=${search || ''}`,

    // }),
    getCharacters: builder.query({
      query: ({ currentPage, search }) => {
        if (search) {
          return `people/?name=${search}`;
        }
        return `people/?page=${currentPage}&limit=10`;
      },
      transformResponse: (response) => {
        if (Array.isArray(response.result)) {
          return {
            results: response.result.map((item) => ({
              uid: item.uid,
              name: item.properties.name,
              url: item.properties.url,
            })),
            total_pages: 1,
          };
        }

        return response;
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
