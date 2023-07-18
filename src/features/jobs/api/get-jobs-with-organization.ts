import { useQuery } from '@tanstack/react-query';

import { apiClient } from '@/lib/api-client';

import { Job, JobFilters, JobWithOrganization } from '../types';

type GetJobsWithOrganizationOptions = {
  params?: {
    organizationId?: string;
    take?: string;
  };
  includes?: string[];
  filters?: JobFilters;
};

export const getJobsWithOrganization = ({
  params,
  includes,
  filters,
}: GetJobsWithOrganizationOptions):
  | Promise<Job[]>
  | Promise<JobWithOrganization[]> => {
  return apiClient.get('/jobs-with-organization', {
    params: {
      ...params,
      ...(includes && { includes: JSON.stringify(includes) }),
      ...(filters && { filters: JSON.stringify(filters) }),
    },
  });
};

export const useJobsWithOrganization = ({
  params,
  includes,
  filters,
}: GetJobsWithOrganizationOptions) => {
  const { data, isFetching, isFetched, refetch } = useQuery({
    queryKey: ['jobs', params],
    queryFn: () =>
      getJobsWithOrganization({ params, includes, filters }),
    // enabled: !!params.organizationId || !!params.take,
    initialData: [],
  });

  return {
    data,
    isLoading: isFetching && !isFetched,
    refetch,
  } as {
    data: Job[] | JobWithOrganization[];
    isLoading: boolean;
    refetch: () => void;
  };
};
