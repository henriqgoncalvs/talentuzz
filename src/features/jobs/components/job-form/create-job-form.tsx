import { Box, Stack } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/button';
import { InputField } from '@/components/form';
import { resolver, z } from '@/lib/schema-validator';

import { useCreateJob } from '../../api/create-job';
import { CreateJobData } from '../../types';

const createJobFormSchema = z.object({
  position: z.string(),
  department: z.string(),
  location: z.string(),
  info: z.string(),
});

type JobFormProps = {
  onSuccess: () => void;
};

export const CreateJobForm = ({ onSuccess }: JobFormProps) => {
  const createJob = useCreateJob({ onSuccess });

  const { register, handleSubmit, formState } =
    useForm<CreateJobData>({
      resolver: resolver(createJobFormSchema),
    });

  const onSubmit = (data: CreateJobData) => {
    createJob.submit({ data });
  };

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
          })}
          error={formState.errors['position']}
        />
        <InputField
          label="Department"
          {...register('department', {
            required: 'Required',
          })}
          error={formState.errors['department']}
        />
        <InputField
          label="Location"
          {...register('location', {
            required: 'Required',
          })}
          error={formState.errors['location']}
        />

        <InputField
          type="textarea"
          label="Info"
          {...register('info', {
            required: 'Required',
          })}
          error={formState.errors['info']}
        />

        <Button
          isDisabled={createJob.isLoading}
          isLoading={createJob.isLoading}
          type="submit"
        >
          Create
        </Button>
      </Stack>
    </Box>
  );
};
