import { useMutation } from '@tanstack/react-query';

import { apiClient } from '@/lib/api-client';
import { queryClient } from '@/lib/react-query';

import { Organization, UpdateOrganizationData } from '../types';

type UpdateOrganizationOptions = {
  organizationId: string;
  data: UpdateOrganizationData;
};

export const updateOrganization = ({
  organizationId,
  data,
}: UpdateOrganizationOptions): Promise<Organization> => {
  return apiClient.patch(
    `/organizations/${organizationId}`,
    data
  );
};

type UseUpdateOrganizationOptions = {
  onSuccess?: (organization: Organization) => void;
};

export const useUpdateOrganization = ({
  onSuccess,
}: UseUpdateOrganizationOptions) => {
  const { mutate: submit, isLoading } = useMutation({
    mutationFn: updateOrganization,
    onSuccess: (organization) => {
      queryClient.invalidateQueries([
        'organization',
        organization.id,
      ]);
      onSuccess?.(organization);
    },
  });

  return { submit, isLoading };
};
