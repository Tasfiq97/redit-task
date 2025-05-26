import {
  useGetAllFilmsQuery,
  useGetCharacterByIdQuery,
  useGetPlanetsByIdQuery,
  useGetSpeciesByIdQuery,
} from '../features/starWarsApi';
import { getIdFromUrl } from '../utils/utils';

export const useCharacterDetails = (charId) => {
  const { data, error, isLoading: characterLoading } = useGetCharacterByIdQuery(charId);
  const { result: characterResult } = data || {};

  // homeworld
  const homeworldId = getIdFromUrl(characterResult?.properties?.homeworld);
  const {
    data: homeworldData,
    isLoading: homeworldLoading,
    error: homeworldError,
  } = useGetPlanetsByIdQuery(homeworldId);
  const { result: homeWorldResult } = homeworldData || {};

  // species
  const { data: speciesData, isLoading: speciesLoading, error: speciesError } = useGetSpeciesByIdQuery(charId);
  const { result: speciesDataResult } = speciesData || {};

  // films
  const { data: filmsData, isLoading: filmsLoading, error: filmsError } = useGetAllFilmsQuery();

  const filmsWithCharacter = filmsData?.result?.filter((film) =>
    film?.properties?.characters?.includes(characterResult?.properties?.url)
  );

  return {
    character: characterResult,
    homeworld: homeWorldResult,
    species: speciesDataResult,
    films: filmsWithCharacter || [],
    characterLoading,
    homeworldLoading,
    speciesLoading,
    filmsLoading,
    error,
    homeworldError,
    speciesError,
    filmsError,
  };
};
