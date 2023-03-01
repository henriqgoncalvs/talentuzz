import { Heading } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';

import { Seo } from '@/components/seo';
import { JobForm } from '@/features/jobs';
import { DashboardLayout } from '@/layouts/dashboard-layout';
import { useNotifications } from '@/stores/notifications';

const DashboardEditJobPage = () => {
  const { showNotification } = useNotifications();
  const router = useRouter();
  const jobId = router.query.jobId as string;

  const onSuccess = () => {
    showNotification({
      type: 'success',
      title: 'Success',
      duration: 5000,
      message: 'Job Edited!',
    });
    router.push(`/dashboard/jobs`);
  };

  return (
    <>
      <Seo title="Edit Job" />
      <Heading mb="8">Edit Job</Heading>
      <JobForm
        onSuccess={onSuccess}
        type="update"
        jobId={jobId}
      />
    </>
  );
};

DashboardEditJobPage.getLayout = function getLayout(
  page: ReactElement
) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default DashboardEditJobPage;
