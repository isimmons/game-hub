import useData from './useData';

import type { Genre } from '~/@types/games';

const useGenres = () => useData<Genre>('/genres');

export default useGenres;
