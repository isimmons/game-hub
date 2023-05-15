import { useQuery } from '@tanstack/react-query';
import APIClient from '~/services/api-client';

const apiClient = new APIClient<Game>('/games');

const useGame = (slug: string) =>
  useQuery({
    queryKey: ['games', slug],
    queryFn: () => apiClient.getBySlug(slug),
  });

export default useGame;
