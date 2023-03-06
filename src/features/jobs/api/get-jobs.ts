import { useQuery } from '@tanstack/react-query';

import { apiClient } from '@/lib/api-client';

import { Job, JobWithOrganization } from '../types';

type GetJobsOptions = {
  params?: {
    organizationId?: string;
    take?: string;
  };
  includes?: string[];
};

export const getJobs = ({
  params,
  includes,
}: GetJobsOptions):
  | Promise<Job[]>
  | Promise<JobWithOrganization[]> => {
  return apiClient.get('/jobs', {
    params: {
      ...params,
      ...(includes && { includes: JSON.stringify(includes) }),
    },
  });
};

export const useJobs = ({
  params,
  includes,
}: GetJobsOptions) => {
  const { data, isFetching, isFetched } = useQuery({
    queryKey: ['jobs', params],
    queryFn: () => getJobs({ params, includes }),
    // enabled: !!params.organizationId || !!params.take,
    initialData: [],
  });

  return {
    data,
    isLoading: isFetching && !isFetched,
  } as {
    data: Job[] | JobWithOrganization[];
    isLoading: boolean;
  };
};
