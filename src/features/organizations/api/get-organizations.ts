import { useQuery } from '@tanstack/react-query';

import { apiClient } from '@/lib/api-client';

import { Organization } from '../types';

export const getOrganizations = (): Promise<Organization[]> => {
  return apiClient.get(`/organization`);
};

export const useOrganizations = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['organizations'],
    queryFn: () => getOrganizations(),
  });

  return { data, isLoading };
};
