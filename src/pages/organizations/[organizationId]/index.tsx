import { Divider, Heading, Stack } from '@chakra-ui/react';
import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next';
import { ReactElement } from 'react';

import { NotFound } from '@/components/not-found';
import { Seo } from '@/components/seo';
import {
  getJobs,
  JobsList,
  JobWithOrganization,
} from '@/features/jobs';
import {
  getOrganization,
  OrganizationInfo,
} from '@/features/organizations';
import { PublicLayout } from '@/layouts/public-layout';

type PublicOrganizationPageProps = InferGetServerSidePropsType<
  typeof getServerSideProps
>;

const PublicOrganizationPage = ({
  organization,
  jobs,
}: PublicOrganizationPageProps) => {
  if (!organization) return <NotFound />;

  return (
    <>
      <Seo title={organization.name} />
      <Stack
        spacing="6"
        w="full"
        maxW="container.lg"
        mx="auto"
        mt="12"
        p="4"
      >
        <OrganizationInfo organization={organization} />
        <Divider />
        <Heading size="lg">Open Jobs</Heading>
        <JobsList jobs={jobs} />
      </Stack>
    </>
  );
};

PublicOrganizationPage.getLayout = function getLayout(
  page: ReactElement
) {
  return <PublicLayout>{page}</PublicLayout>;
};

export default PublicOrganizationPage;

export const getServerSideProps = async ({
  params,
}: GetServerSidePropsContext) => {
  const organizationId = params?.organizationId as string;

  const [organization, jobs] = await Promise.all([
    getOrganization({ organizationId }).catch(() => null),
    getJobs({
      params: {
        organizationId,
      },
    }).catch(() => [] as JobWithOrganization[]),
  ]);

  const jobsWithOrganization = jobs.map((job) => ({
    ...job,
    organization,
  }));

  return {
    props: {
      organization,
      jobs: jobsWithOrganization,
    } as {
      organization: typeof organization;
      jobs: JobWithOrganization[];
    },
  };
};
