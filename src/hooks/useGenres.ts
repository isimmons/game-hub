import { useQuery } from '@tanstack/react-query';
import APIClient, { type FetchResponse } from '~/services/api-client';

import genres from '~/data/genres';

const apiClient = new APIClient<Genre>('/genres');

const useGenres = () =>
  useQuery<FetchResponse<Genre>, Error>({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: 86_400_000, // 24 hrs
    initialData: { count: genres.length, results: genres },
  });

export default useGenres;
