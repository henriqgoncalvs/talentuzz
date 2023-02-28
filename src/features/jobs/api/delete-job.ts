import { useMutation } from '@tanstack/react-query';

import { apiClient } from '@/lib/api-client';
import { queryClient } from '@/lib/react-query';

import { Job } from '../types';

type DeleteJobOptions = {
  jobId: string;
};

export const deleteJob = ({
  jobId,
}: DeleteJobOptions): Promise<Job> => {
  return apiClient.delete(`/jobs/${jobId}`);
};

type UseDeleteJobOptions = {
  onSuccess?: (job: Job) => void;
};

export const useDeleteJob = ({
  onSuccess,
}: UseDeleteJobOptions = {}) => {
  const { mutateAsync: submit, isLoading } = useMutation({
    mutationFn: deleteJob,
    onSuccess: (job) => {
      queryClient.invalidateQueries(['jobs']);
      onSuccess?.(job);
    },
  });

  return { submit, isLoading };
};
