import { useQuery } from '@tanstack/react-query';
import apiClient from '~/services/api-client';

import platforms from '~/data/platforms';

const usePlatforms = () =>
  useQuery<FetchResponse<Platform>, Error>({
    queryKey: ['platforms'],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>('/platforms/lists/parents')
        .then((res) => res.data),
    staleTime: 86_400_000, // 24 hrs
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
