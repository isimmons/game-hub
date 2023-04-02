import useData from './useData';

import type { Game } from '~/@types/games';

const useGames = () => useData<Game>('/games');

export default useGames;
