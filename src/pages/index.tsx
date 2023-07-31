import { InferGetStaticPropsType } from 'next';
import { ReactElement } from 'react';

import { Seo } from '@/components/seo';
import {
  JobWithOrganization,
  getJobsWithOrganization,
} from '@/features/jobs';
import {
  FaqSection,
  FindATalentSection,
  HeroSection,
  JobsBarSection,
  LatestJobsSection,
  NumbersInfoSection,
} from '@/features/landing';
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
  const latestJobs = (await getJobsWithOrganization({
    params: { take: '6' },
  })) as JobWithOrganization[];

  return {
    props: {
      latestJobs,
    },
  };
};

export default LandingPage;
