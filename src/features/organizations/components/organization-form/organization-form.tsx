import { EditIcon } from '@chakra-ui/icons';
import { Box, Stack } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/button';
import { InputField } from '@/components/form';

import { useUpdateOrganization } from '../../api/update-organization';
import {
  Organization,
  UpdateOrganizationData,
} from '../../types';

type OrganizationFormProps = {
  onSuccess: () => void;
  organization: Organization;
};

export const OrganizationForm = ({
  onSuccess,
  organization,
}: OrganizationFormProps) => {
  const updateOrganization = useUpdateOrganization({
    onSuccess,
  });

  const { register, handleSubmit, formState } =
    useForm<UpdateOrganizationData>();

  const onSubmit = (data: UpdateOrganizationData) => {
    updateOrganization.submit({
      data,
      organizationId: organization.id,
    });
  };

  return (
    <Box>
      <Stack
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        w="full"
        spacing="8"
      >
        <InputField
          label="Name"
          {...register('name', {
            required: 'Required',
            value: organization.name,
          })}
          error={formState.errors['name']}
        />

        <InputField
          label="Email"
          {...register('email', {
            required: 'Required',
            value: organization.email,
          })}
          error={formState.errors['email']}
        />

        <InputField
          label="Phone"
          {...register('phone', {
            required: 'Required',
            value: organization.phone,
          })}
          error={formState.errors['phone']}
        />

        <InputField
          type="textarea"
          label="Info"
          {...register('info', {
            required: 'Required',
            value: organization.info,
          })}
          error={formState.errors['info']}
        />

        <Button
          type="submit"
          isLoading={updateOrganization.isLoading}
          isDisabled={updateOrganization.isLoading}
          icon={<EditIcon />}
        >
          Edit
        </Button>
      </Stack>
    </Box>
  );
};
