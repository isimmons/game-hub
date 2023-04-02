import useData from './useData';

import type { Genre } from '~/@types';

const useGenres = () => useData<Genre>('/genres');

export default useGenres;
