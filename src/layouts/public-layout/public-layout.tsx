import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';

export type PublicLayoutP = {
  children: ReactNode;
};

export const PublicLayout = ({ children }: PublicLayoutP) => {
  return (
    <>
      <Navbar />
      <Box as="main" pt="20">
        <Box maxW="container.lg" mx="auto">
          <Box mx="4">{children}</Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};
