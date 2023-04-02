import useData from './useData';

import type { GamePlatform } from '~/@types';

const usePlatforms = () => useData<GamePlatform>('/platforms/lists/parents');

export default usePlatforms;
