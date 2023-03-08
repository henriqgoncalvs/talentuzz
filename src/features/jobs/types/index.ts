import { Organization } from '@/features/organizations';
import { Entity } from '@/types';

export type Job = Entity & {
  organizationId: string;
  position: string;
  info: string;
  location: string;
  department: string;
  employmentType: EmploymentType;
  experienceLevel: ExperienceLevel;
  salaryRange: SalaryRange;
};

export type JobWithOrganization = Job & {
  organization: Organization;
};

export type CreateJobData = Pick<
  Job,
  | 'position'
  | 'department'
  | 'location'
  | 'info'
  | 'employmentType'
  | 'experienceLevel'
  | 'salaryRange'
>;

export type UpdateJobData = Partial<CreateJobData>;

type EmploymentType =
  | 'full-time'
  | 'part-time'
  | 'freelance'
  | 'internship'
  | 'contract';

type ExperienceLevel =
  | 'student-level'
  | 'entry-level'
  | 'mid-level'
  | 'senior-level';

type SalaryRange =
  | '0-to-30'
  | '30-to-50'
  | '50-to-100'
  | '100-to-200'
  | '200-plus';

export type JobFilters = {
  employmentType?: EmploymentType[];
  experienceLevel?: ExperienceLevel[];
  salaryRange?: SalaryRange[];
  position?: string[];
  location?: string[];
};
