import { useQuery } from '@tanstack/react-query';
import APIClient from '~/services/api-client';
import { CACHE_KEY_SCREENSHOTS } from '~/constants';
const useScreenShots = (gameId: number) => {
  const apiClient = new APIClient<Screenshot>(`/games/${gameId}/screenshots`);

  return useQuery({
    queryKey: [CACHE_KEY_SCREENSHOTS, gameId],
    queryFn: apiClient.getAll,
  });
};

export default useScreenShots;
