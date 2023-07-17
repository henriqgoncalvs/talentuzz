import { ReactElement } from 'react';

import { Loading } from '@/components/loading';
import { NotFound } from '@/components/not-found';
import { Seo } from '@/components/seo';
import { useUser } from '@/features/auth';
import {
  OrganizationInfo,
  useOrganization,
} from '@/features/organizations';
import { DashboardLayout } from '@/layouts/dashboard-layout';

const DashboardOrganizationPage = () => {
  const user = useUser();
  const { data: organizationData, isLoading } = useOrganization({
    organizationId: user.data?.organization.id ?? '',
  });

  if (isLoading) {
    return <Loading />;
  }

  if (!organizationData) {
    return <NotFound />;
  }

  return (
    <>
      <Seo title="Organization" />
      <OrganizationInfo
        type="dashboard"
        organization={organizationData}
      />
    </>
  );
};

DashboardOrganizationPage.getLayout = function getLayout(
  page: ReactElement
) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default DashboardOrganizationPage;
