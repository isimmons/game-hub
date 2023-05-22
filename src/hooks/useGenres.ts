import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import APIClient, { type FetchResponse } from '~/services/api-client';
import { CACHE_KEY_GENRES } from '~/constants';
import genres from '~/data/genres';

const apiClient = new APIClient<Genre>('/genres');

const useGenres = () =>
  useQuery<FetchResponse<Genre>, Error>({
    queryKey: [CACHE_KEY_GENRES],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData: genres,
  });

export default useGenres;
