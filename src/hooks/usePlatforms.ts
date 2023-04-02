import useData from './useData';

import type { GamePlatform } from '~/@types/games';

const usePlatforms = () => useData<GamePlatform>('/platforms/lists/parents');

export default usePlatforms;
