import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import APIClient, { type FetchResponse } from '~/services/api-client';
import { CACHE_KEY_PLATFORMS } from '~/constants';
import platforms from '~/data/platforms';

const apiClient = new APIClient<Platform>('/platforms/lists/parents');

const usePlatforms = () =>
  useQuery<FetchResponse<Platform>, Error>({
    queryKey: [CACHE_KEY_PLATFORMS],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData: platforms,
  });

export default usePlatforms;
