import useData from './useData';

import type { Game, Genre } from '~/@types';

const useGames = (selectedGenre: Genre | null) =>
  useData<Game>(
    '/games',
    {
      params: {
        genres: selectedGenre?.id,
      },
    },
    [selectedGenre?.id]
  );

export default useGames;
