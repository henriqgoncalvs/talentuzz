import { InfoOutlineIcon, SettingsIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Skeleton,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { Link } from '@/components/link';
import { useLogout, useUser } from '@/features/auth';

export const Navbar = () => {
  const user = useUser();
  const router = useRouter();
  const logout = useLogout({
    onSuccess: () =>
      router.pathname !== '/' &&
      router.push('/', undefined, { shallow: true }),
  });
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      });
    }
  });

  return (
    <Box
      as="nav"
      position="fixed"
      w="full"
      zIndex="sticky"
      bg={isScrolled ? 'brand.500' : 'transparent'}
      transition="background-color 0.1s ease-in"
    >
      <Container maxW="container.lg" size="3xl" py="4">
        <Flex justify="space-between">
          <HStack>
            <Link
              variant="ghost"
              href="/"
              fontFamily="clash-display"
              fontSize="3xl"
              pl="0"
            >
              talentuzz
            </Link>
          </HStack>
          {((!user.isLoading && !user.data) || user.isError) && (
            <HStack spacing="5">
              <Link variant="link" href="/jobs">
                Find Jobs
              </Link>
              <Link variant="link" href="/organizations">
                Startups
              </Link>
            </HStack>
          )}
          <HStack>
            <Skeleton
              isLoaded={!user.isLoading}
              borderRadius="md"
            >
              {user.data ? (
                <HStack spacing="5">
                  <Link
                    icon={<InfoOutlineIcon />}
                    colorScheme="secondary"
                    variant="solid"
                    href="/dashboard/jobs"
                  >
                    Jobs
                  </Link>
                  <Link
                    icon={<SettingsIcon />}
                    colorScheme="secondary"
                    variant="solid"
                    href="/dashboard/organization"
                  >
                    Organization
                  </Link>
                  <Button
                    isDisabled={logout.isLoading}
                    isLoading={logout.isLoading}
                    variant="outline"
                    onClick={() => logout.submit()}
                  >
                    Log Out
                  </Button>
                </HStack>
              ) : (
                <Link href="/auth/login" variant="outline">
                  {`I'm`} a Startup
                </Link>
              )}
            </Skeleton>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};
