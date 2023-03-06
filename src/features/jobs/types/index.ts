import { Organization } from '@/features/organizations';
import { Entity } from '@/types';

export type Job = Entity & {
  organizationId: string;
  position: string;
  info: string;
  location: string;
  department: string;
};

export type JobWithOrganization = Job & {
  organization: Organization;
};

export type CreateJobData = Pick<
  Job,
  'position' | 'department' | 'location' | 'info'
>;

export type UpdateJobData = Partial<CreateJobData>;
