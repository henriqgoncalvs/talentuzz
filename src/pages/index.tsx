import { Center } from '@chakra-ui/react';

import { Button } from '@/components/button';
import { InputField } from '@/components/form';
import { Link } from '@/components/link';
import { Seo } from '@/components/seo';

const LandingPage = () => {
  return (
    <>
      <Seo title="Talentuzz" />
      <Center>
        <Button variant="solid">Click me</Button>
        <InputField label="Name" />
        <Link href="/">Home</Link>
      </Center>
    </>
  );
};

export default LandingPage;
