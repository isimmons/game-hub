import { useQuery } from '@tanstack/react-query';
import APIClient from '~/services/api-client';
import { CACHE_KEY_GAMES } from '~/constants';

const apiClient = new APIClient<Game>('/games');

const useGame = (slug: string) =>
  useQuery({
    queryKey: [CACHE_KEY_GAMES, slug],
    queryFn: () => apiClient.getBySlug(slug),
  });

export default useGame;
