import { EditIcon } from '@chakra-ui/icons';
import { Box, Stack } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/button';
import { InputField } from '@/components/form';
import { Loading } from '@/components/loading';
import { NotFound } from '@/components/not-found';
import { resolver, z } from '@/lib/schema-validator';

import { useJob } from '../../api/get-job';
import { useUpdateJob } from '../../api/update-job';
import { UpdateJobData } from '../../types';

const updateJobFormSchema = z.object({
  position: z.string(),
  department: z.string(),
  location: z.string(),
  info: z.string(),
});

type JobFormProps = {
  jobId: string;
  onSuccess: () => void;
};

export const UpdateJobForm = ({
  onSuccess,
  jobId,
}: JobFormProps) => {
  const job = useJob({ jobId });
  const updateJob = useUpdateJob({ onSuccess });

  const { register, handleSubmit, formState } =
    useForm<UpdateJobData>({
      resolver: resolver(updateJobFormSchema),
    });

  const onSubmit = (data: UpdateJobData) => {
    updateJob.submit({ data, jobId });
  };

  if (job.isLoading) {
    return <Loading />;
  }

  if (!job.data) {
    return <NotFound />;
  }

  return (
    <Box w="full">
      <Stack
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        w="full"
        spacing="8"
      >
        <InputField
          label="Position"
          {...register('position', {
            required: 'Required',
            value: job.data.position,
          })}
          error={formState.errors['position']}
        />
        <InputField
          label="Department"
          {...register('department', {
            required: 'Required',
            value: job.data.department,
          })}
          error={formState.errors['department']}
        />
        <InputField
          label="Location"
          {...register('location', {
            required: 'Required',
            value: job.data.location,
          })}
          error={formState.errors['location']}
        />

        <InputField
          type="textarea"
          label="Info"
          {...register('info', {
            required: 'Required',
            value: job.data.info,
          })}
          error={formState.errors['info']}
        />

        <Button
          isDisabled={updateJob.isLoading}
          isLoading={updateJob.isLoading}
          type="submit"
          icon={<EditIcon />}
        >
          Edit
        </Button>
      </Stack>
    </Box>
  );
};
