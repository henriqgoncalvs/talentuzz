import { Heading } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';

import { Loading } from '@/components/loading';
import { NotFound } from '@/components/not-found';
import { Seo } from '@/components/seo';
import { useUser } from '@/features/auth';
import {
  OrganizationForm,
  useOrganization,
} from '@/features/organizations';
import { DashboardLayout } from '@/layouts/dashboard-layout';
import { useNotifications } from '@/stores/notifications';

const DashboardEditOrganizationPage = () => {
  const { showNotification } = useNotifications();
  const router = useRouter();
  const user = useUser();
  const { data: organizationData, isLoading } = useOrganization({
    organizationId: user.data?.organization?.id ?? '',
  });

  if (isLoading) {
    return <Loading />;
  }

  if (!organizationData) {
    return <NotFound />;
  }

  const onSuccess = () => {
    showNotification({
      type: 'success',
      title: 'Success',
      duration: 5000,
      message: 'Organization Edited!',
    });
    router.push(`/dashboard/organization`);
  };

  return (
    <>
      <Seo title="Edit Organization" />
      <Heading mb="8">Edit Organization</Heading>
      <OrganizationForm
        organization={organizationData}
        onSuccess={onSuccess}
      />
    </>
  );
};

DashboardEditOrganizationPage.getLayout = function getLayout(
  page: ReactElement
) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default DashboardEditOrganizationPage;
