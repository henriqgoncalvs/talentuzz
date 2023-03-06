import { InferGetStaticPropsType } from 'next';
import { ReactElement } from 'react';

import { Seo } from '@/components/seo';
import { getJobs } from '@/features/jobs';
import {
  FaqSection,
  FindATalentSection,
  HeroSection,
  JobsBarSection,
  LatestJobsSection,
  NumbersInfoSection,
} from '@/features/landing';
import { getOrganization } from '@/features/organizations';
import { PublicLayout } from '@/layouts/public-layout';

type LandingPageProps = InferGetStaticPropsType<
  typeof getStaticProps
>;

const LandingPage = ({ latestJobs }: LandingPageProps) => {
  return (
    <>
      <Seo />
      <HeroSection />
      <JobsBarSection />
      <NumbersInfoSection />
      <LatestJobsSection jobs={latestJobs} />
      <FindATalentSection />
      <FaqSection />
    </>
  );
};

LandingPage.getLayout = function getLayout(page: ReactElement) {
  return <PublicLayout>{page}</PublicLayout>;
};

export const getStaticProps = async () => {
  const latestJobs = await getJobs({ params: { take: '6' } });

  const organizationIds = Array.from(
    new Set(latestJobs.map((job) => job.organizationId))
  );

  const organizations = await Promise.all(
    organizationIds.map((id) =>
      getOrganization({ organizationId: id })
    )
  );

  const latestJobsWithOrganization = latestJobs.map((job) => ({
    ...job,
    organization: organizations.find(
      (org) => org.id === job.organizationId
    )!,
  }));

  return {
    props: {
      latestJobs: latestJobsWithOrganization,
    },
    revalidate: 60,
  };
};

export default LandingPage;
