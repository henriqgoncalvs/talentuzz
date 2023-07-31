import { InfoOutlineIcon, SettingsIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Skeleton,
  chakra,
  IconButton,
  VStack,
  CloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

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
  const mobileNav = useDisclosure();

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
    <>
      <chakra.header
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        position="fixed"
        zIndex="sticky"
        bg={isScrolled ? 'brand.500' : 'transparent'}
        transition="background-color 0.1s ease-in"
      >
        <Container maxW="container.lg" size="3xl">
          <Flex
            alignItems="center"
            justifyContent="space-between"
            mx="auto"
          >
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
            <HStack alignItems="center" spacing={1}>
              {((!user.isLoading && !user.data) ||
                user.isError) && (
                <HStack
                  spacing="5"
                  display={{ base: 'none', md: 'flex' }}
                  mr="5"
                >
                  <Link variant="link" href="/jobs">
                    Find Jobs
                  </Link>
                  <Link variant="link" href="/organizations">
                    Startups
                  </Link>
                </HStack>
              )}
              <HStack
                display={{ base: 'none', md: 'inline-flex' }}
              >
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
              <Box display={{ base: 'inline-flex', md: 'none' }}>
                <IconButton
                  display={{ base: 'flex', md: 'none' }}
                  aria-label="Open menu"
                  fontSize="20px"
                  color="gray.800"
                  bg="brand.500"
                  variant="ghost"
                  icon={<AiOutlineMenu />}
                  onClick={mobileNav.onOpen}
                />

                <VStack
                  pos="absolute"
                  top={0}
                  left={0}
                  right={0}
                  display={mobileNav.isOpen ? 'flex' : 'none'}
                  transition="all .2s ease-in-out"
                  flexDirection="column"
                  p={2}
                  pb={4}
                  m={2}
                  bg="brand.500"
                  spacing={3}
                  rounded="sm"
                  shadow="sm"
                >
                  <CloseButton
                    aria-label="Close menu"
                    onClick={mobileNav.onClose}
                  />

                  {((!user.isLoading && !user.data) ||
                    user.isError) && (
                    <VStack spacing="5" mr="5">
                      <Link variant="link" href="/jobs">
                        Find Jobs
                      </Link>
                      <Link variant="link" href="/organizations">
                        Startups
                      </Link>
                    </VStack>
                  )}
                  <VStack w="full">
                    <Skeleton
                      isLoaded={!user.isLoading}
                      borderRadius="md"
                    >
                      {user.data ? (
                        <VStack spacing="5" w="full">
                          <Link
                            icon={<InfoOutlineIcon />}
                            colorScheme="secondary"
                            variant="solid"
                            href="/dashboard/jobs"
                            w="full"
                          >
                            Jobs
                          </Link>
                          <Link
                            icon={<SettingsIcon />}
                            colorScheme="secondary"
                            variant="solid"
                            href="/dashboard/organization"
                            w="full"
                          >
                            Organization
                          </Link>
                          <Button
                            isDisabled={logout.isLoading}
                            isLoading={logout.isLoading}
                            variant="outline"
                            onClick={() => logout.submit()}
                            w="full"
                          >
                            Log Out
                          </Button>
                        </VStack>
                      ) : (
                        <Link
                          href="/auth/login"
                          variant="outline"
                        >
                          {`I'm`} a Startup
                        </Link>
                      )}
                    </Skeleton>
                  </VStack>
                </VStack>
              </Box>
            </HStack>
          </Flex>
        </Container>
      </chakra.header>
    </>
  );

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
