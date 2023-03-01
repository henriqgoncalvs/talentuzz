import { useMutation } from '@tanstack/react-query';

import { apiClient } from '@/lib/api-client';
import { queryClient } from '@/lib/react-query';

import { Job, UpdateJobData } from '../types';

type UpdateJobOptions = {
  jobId: string;
  data: UpdateJobData;
};

export const updateJob = ({
  jobId,
  data,
}: UpdateJobOptions): Promise<Job> => {
  return apiClient.patch(`/jobs/${jobId}`, data);
};

type UseUpdateJobOptions = {
  onSuccess?: (job: Job) => void;
};

export const useUpdateJob = ({
  onSuccess,
}: UseUpdateJobOptions = {}) => {
  const { mutate: submit, isLoading } = useMutation({
    mutationFn: updateJob,
    onSuccess: (job) => {
      queryClient.invalidateQueries(['job', job.id]);
      onSuccess?.(job);
    },
  });

  return { submit, isLoading };
};
