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

import { Link } from '@/components/link';
import { useLogout, useUser } from '@/features/auth';

export const Navbar = () => {
  const user = useUser();
  const router = useRouter();
  const logout = useLogout({
    onSuccess: () => router.push('/auth/login'),
  });

  return (
    <Box as="nav" position="fixed" w="full">
      <Container maxW="container.lg" size="3xl" py="3">
        <Flex justify="space-between">
          <HStack>
            <Link
              variant="ghost"
              href="/"
              fontFamily="clash-display"
              fontSize="3xl"
            >
              talentuzz
            </Link>
          </HStack>
          {!user.isLoading && !user.data && (
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
