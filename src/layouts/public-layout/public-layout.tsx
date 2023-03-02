import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

import { Link } from '@/components/link';
import { Navbar } from '@/components/navbar';

export type PublicLayoutP = {
  children: ReactNode;
};

export const PublicLayout = ({ children }: PublicLayoutP) => {
  return (
    <>
      <Navbar />
      <Box as="section" h="full" minH="100vh" pt="20">
        <Box maxW="container.lg" mx="auto" h="full" py="3">
          <Box minH="80%" mx="4">
            {children}
          </Box>
          <Box py="8" textAlign="center">
            Powered by <Link href="/">Talentuzz</Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};
