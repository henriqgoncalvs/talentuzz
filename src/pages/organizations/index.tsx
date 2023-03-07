import { InferGetStaticPropsType } from 'next';
import { ReactElement } from 'react';

import { Seo } from '@/components/seo';
import {
  getOrganizations,
  OrganizationsList,
  PublicOrganizationPageHeroSection,
} from '@/features/organizations';
import { PublicLayout } from '@/layouts/public-layout';

type PublicOrganizationListPageProps = InferGetStaticPropsType<
  typeof getStaticProps
>;

const PublicOrganizationListPage = ({
  organizations,
}: PublicOrganizationListPageProps) => {
  return (
    <>
      <Seo title="Organizations" />

      <PublicOrganizationPageHeroSection />
      <OrganizationsList organizations={organizations} />
    </>
  );
};

PublicOrganizationListPage.getLayout = function getLayout(
  page: ReactElement
) {
  return <PublicLayout>{page}</PublicLayout>;
};

export const getStaticProps = async () => {
  const organizations = await getOrganizations();

  return {
    props: {
      organizations,
    },
  };
};

export default PublicOrganizationListPage;
