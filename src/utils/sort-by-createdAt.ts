import { Job, JobWithOrganization } from '@/features/jobs';

export const sortJobsByCreatedAt = <
  T extends Job | JobWithOrganization
>(
  arr: T[]
) => {
  return arr.sort((a, b) =>
    a.createdAt > b.createdAt ? 1 : -1
  );
};
