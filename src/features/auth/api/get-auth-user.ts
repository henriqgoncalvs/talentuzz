import { useQuery } from '@tanstack/react-query';

import { apiClient } from '@/lib/api-client';

import { AuthUser } from '../types';

export const getAuthUser = (): Promise<AuthUser | undefined> => {
  return apiClient.get('/auth/me');
};

export const useUser = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['auth-user'],
    queryFn: getAuthUser,
  });

  return { data, isLoading, isError };
};
