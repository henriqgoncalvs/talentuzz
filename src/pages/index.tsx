import { ReactElement } from 'react';

import { Seo } from '@/components/seo';
import { HeroSection, JobsBarSection } from '@/features/landing';
import { PublicLayout } from '@/layouts/public-layout';

const LandingPage = () => {
  return (
    <>
      <Seo title="Talentuzz" />
      <HeroSection />
      <JobsBarSection />
    </>
  );
};

LandingPage.getLayout = function getLayout(page: ReactElement) {
  return <PublicLayout>{page}</PublicLayout>;
};

export default LandingPage;
