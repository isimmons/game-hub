import { useQuery } from '@tanstack/react-query';
import APIClient, { type FetchResponse } from '~/services/api-client';

import platforms from '~/data/platforms';

const apiClient = new APIClient<Platform>('/platforms/lists/parents');

const usePlatforms = () =>
  useQuery<FetchResponse<Platform>, Error>({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: 86_400_000, // 24 hrs
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
