import { Center, Heading, Text, VStack } from '@chakra-ui/react';
import { ReactElement } from 'react';

import { Link } from '@/components/link';
import { Seo } from '@/components/seo';
import { PublicLayout } from '@/layouts/public-layout';

const LandingPage = () => {
  return (
    <>
      <Seo title="Talentuzz" />
      <Center flexDirection="column" h="full">
        <VStack maxW="3xl" spacing="8">
          <Heading size="3xl">Talentuzz</Heading>
          <Text
            fontSize={{ base: 'lg', md: 'xl' }}
            maxW="2xl"
            color="muted"
          >
            Manage your careers pages
          </Text>
          <Link href={'/dashboard/jobs'} variant="solid">
            Get Started
          </Link>
        </VStack>
      </Center>
    </>
  );
};

LandingPage.getLayout = function getLayout(page: ReactElement) {
  return <PublicLayout>{page}</PublicLayout>;
};

export default LandingPage;
