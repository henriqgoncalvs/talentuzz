import { useQuery } from '@tanstack/react-query';

import { apiClient } from '@/lib/api-client';

import { Job, JobFilters, JobWithOrganization } from '../types';

type GetJobsOptions = {
  params?: {
    organizationId?: string;
    take?: string;
  };
  includes?: string[];
  filters?: JobFilters;
};

export const getJobs = ({
  params,
  includes,
  filters,
}: GetJobsOptions):
  | Promise<Job[]>
  | Promise<JobWithOrganization[]> => {
  return apiClient.get('/jobs', {
    params: {
      ...params,
      ...(includes && { includes: JSON.stringify(includes) }),
      ...(filters && { filters: JSON.stringify(filters) }),
    },
  });
};

export const useJobs = ({
  params,
  includes,
  filters,
}: GetJobsOptions) => {
  const { data, isFetching, isFetched, refetch } = useQuery({
    queryKey: ['jobs', params],
    queryFn: () => getJobs({ params, includes, filters }),
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
