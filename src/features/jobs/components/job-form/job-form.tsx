import { CreateJobForm } from './create-job-form';
import { UpdateJobForm } from './update-job-form';

export type JobFormProps =
  | {
      type: 'create';
      onSuccess: () => void;
      jobId?: never;
    }
  | {
      type: 'update';
      onSuccess: () => void;
      jobId: string;
    };

export const JobForm = ({
  type,
  onSuccess,
  jobId,
}: JobFormProps) =>
  type === 'create' ? (
    <CreateJobForm onSuccess={onSuccess} />
  ) : (
    <UpdateJobForm onSuccess={onSuccess} jobId={jobId} />
  );
