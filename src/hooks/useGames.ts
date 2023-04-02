import useData from './useData';

import type { Game, GamePlatform, Genre } from '~/@types';

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: GamePlatform | null
) =>
  useData<Game>(
    '/games',
    {
      params: {
        genres: selectedGenre?.id,
        platforms: selectedPlatform?.id,
      },
    },
    [selectedGenre?.id, selectedPlatform?.id]
  );

export default useGames;
