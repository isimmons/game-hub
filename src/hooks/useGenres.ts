import { useQuery } from '@tanstack/react-query';
import apiClient from '~/services/api-client';

import genres from '~/data/genres';

const useGenres = () =>
  useQuery({
    queryKey: ['genres'],
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>('/genres').then((res) => res.data),
    staleTime: 86_400_000, // 24 hrs
    initialData: { count: genres.length, results: genres },
  });

export default useGenres;
