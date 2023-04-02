import useData from './useData';

import type { Platform } from '~/@types';

const usePlatforms = () => useData<Platform>('/platforms/lists/parents');

export default usePlatforms;
