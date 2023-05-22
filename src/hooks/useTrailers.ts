import { useQuery } from '@tanstack/react-query';
import APIClient from '~/services/api-client';
import { CACHE_KEY_TRAILERS } from '~/constants';
const useTrailers = (gameId: number) => {
  const apiClient = new APIClient<Trailer>(`/games/${gameId}/movies`);

  return useQuery({
    queryKey: [CACHE_KEY_TRAILERS, gameId],
    queryFn: apiClient.getAll,
  });
};

export default useTrailers;
