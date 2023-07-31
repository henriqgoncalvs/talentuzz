import { Box, Container } from '@chakra-ui/react';
import { ReactNode } from 'react';

import { Footer } from '@/components/footer';
import { Link } from '@/components/link';
import { Navbar } from '@/components/navbar';
import { Protected, useUser } from '@/features/auth';

export type DashboardLayoutP = {
  children: ReactNode;
};

export const DashboardLayout = ({
  children,
}: DashboardLayoutP) => {
  const user = useUser();

  return (
    <Protected>
      <Navbar />
      <Box as="section" pt="20">
        <Container as="main" maxW="container.lg" py="12">
          {children}
        </Container>
        <Box py="8" textAlign="center">
          <Link
            href={`/organizations/${user.data?.organization?.id}`}
          >
            View Public Organization Page
          </Link>
        </Box>
      </Box>
      <Footer />
    </Protected>
  );
};
