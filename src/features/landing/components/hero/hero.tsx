import {
  Center,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';
import {
  FaApple,
  FaGoogle,
  FaSpotify,
  FaSuitcase,
  FaTwitch,
  FaUserPlus,
} from 'react-icons/fa';

import { Link } from '@/components/link';

export const HeroSection = () => {
  return (
    <Center
      flexDirection="column"
      minH="80vh"
      as="section"
      role="banner"
    >
      <HStack w="full" alignItems="stretch">
        <VStack
          flex="1"
          flexDirection="column"
          w="full"
          h="full"
          alignItems="flex-start"
          spacing="8"
        >
          <Heading size="4xl" lineHeight="shorter">
            Startup jobs you can&apos;t find{' '}
            <Text
              as="span"
              display="block"
              position="relative"
              textDecor="underline"
            >
              anywhere else
            </Text>
          </Heading>
          <Text
            fontSize={{ base: 'lg', md: 'xl' }}
            maxW="2xl"
            color="muted"
          >
            The best place to discover & apply to the coolest
            startup jobs, without the black box.
          </Text>
          <Flex
            flexDir={{ base: 'column', md: 'row' }}
            w="full"
            alignItems="center"
            gap="3"
          >
            <Link
              href={'/jobs'}
              variant="solid"
              w={{ base: 'full', md: 'min-content' }}
            >
              Find your next job
            </Link>
            <Link
              href={'/dashboard/jobs'}
              variant="outline"
              w={{ base: 'full', md: 'min-content' }}
            >
              I&apos;m a startup
            </Link>
          </Flex>
        </VStack>
        <VStack
          flex="1"
          w="full"
          minH="full"
          position="relative"
          transform="rotateY(-30deg) rotateZ(3deg) perspective(600px)"
          display={{ base: 'none', lg: 'initial' }}
        >
          <VStack
            bg="brand.500"
            p="5"
            justifyContent="space-between"
            alignItems="flex-start"
            spacing="8"
            borderRadius="md"
            maxW="180px"
            border="1px solid black"
            boxShadow="5px 2px 0 3px black"
            position="absolute"
            right="0"
            top="65%"
            transform="translateY(-50%)"
            transition="transform 0.2s cubic-bezier(0.22, 1, 0.36, 1)"
            _hover={{
              transform: 'translateY(-55%) scale(1.02)',
            }}
          >
            <Center bg="brand.700" borderRadius="md" p="2">
              <FaApple fontSize="1.3rem" />
            </Center>
            <VStack alignItems="flex-start">
              <Text fontSize="sm" color="gray.100">
                Apple Inc.
              </Text>
              <Text
                fontSize="3xl"
                fontWeight="bold"
                lineHeight="7"
              >
                Web Designer
              </Text>
            </VStack>
            <Text fontWeight="bold">
              $120k
              <Text as="span" color="gray.500">
                /year
              </Text>
            </Text>
          </VStack>
          <VStack
            bg="secondary.500"
            p="5"
            justifyContent="space-between"
            alignItems="flex-start"
            spacing="8"
            borderRadius="md"
            maxW="180px"
            border="1px solid black"
            boxShadow="7px 2px 0 black"
            position="absolute"
            left="0"
            top="0"
            transform="translateY(-35%)"
            transition="transform 0.2s cubic-bezier(0.22, 1, 0.36, 1)"
            _hover={{
              transform: 'translateY(-40%) scale(1.02)',
            }}
          >
            <Center bg="secondary.800" borderRadius="md" p="2">
              <FaSpotify fontSize="1.3rem" />
            </Center>
            <VStack alignItems="flex-start">
              <Text fontSize="sm" color="gray.700">
                Spotify
              </Text>
              <Text
                fontSize="3xl"
                fontWeight="bold"
                lineHeight="7"
              >
                Front Developer
              </Text>
            </VStack>
            <Text fontWeight="bold">
              $170k
              <Text as="span" color="gray.500">
                /year
              </Text>
            </Text>
          </VStack>
          <HStack
            bg="black"
            p="5"
            justifyContent="space-between"
            alignItems="flex-start"
            spacing="8"
            borderRadius="md"
            border="1px solid white"
            boxShadow="7px 2px 0 black"
            position="absolute"
            left="1.3rem"
            bottom="1rem"
            transition="transform 0.2s cubic-bezier(0.22, 1, 0.36, 1)"
            _hover={{
              transform: 'translateY(-5%) scale(1.02)',
            }}
          >
            <VStack alignItems="flex-start">
              <Center
                bg="gray.500"
                borderRadius="md"
                p="2"
                color="secondary.500"
              >
                <FaSuitcase fontSize="1.3rem" />
              </Center>
              <Text
                fontSize="2xl"
                fontWeight="bold"
                color="white"
              >
                1.325
              </Text>
              <Text fontSize="md" color="gray.300">
                Job views
              </Text>
            </VStack>
            <Text fontWeight="bold" color="secondary.500">
              200+{' '}
              <Text as="span" color="gray.300">
                this week
              </Text>
            </Text>
          </HStack>
          <HStack
            bg="white"
            p="5"
            justifyContent="space-between"
            alignItems="flex-start"
            spacing="8"
            borderRadius="md"
            border="1px solid black"
            boxShadow="7px 2px 0 black"
            position="absolute"
            right="0rem"
            top="1rem"
            transform="translateY(-35%)"
            transition="transform 0.2s cubic-bezier(0.22, 1, 0.36, 1)"
            _hover={{
              transform: 'translateY(-40%) scale(1.02)',
            }}
          >
            <VStack alignItems="flex-start">
              <Center
                bg="black"
                borderRadius="md"
                p="2"
                color="brand.500"
              >
                <FaUserPlus fontSize="1.3rem" />
              </Center>
              <Text fontSize="2xl" fontWeight="bold">
                205
              </Text>
              <Text fontSize="md">Job Applications</Text>
            </VStack>
            <Text fontWeight="bold" color="brand.800">
              10+ <Text as="span">today</Text>
            </Text>
          </HStack>
          <Center
            bg="gray.500"
            borderRadius="md"
            p="2"
            color="secondary.500"
            border="1px solid white"
            boxShadow="7px 2px 0 black"
            position="absolute"
            left="25%"
            bottom="40%"
            transform="translateY(-50%)"
            transition="transform 0.2s cubic-bezier(0.22, 1, 0.36, 1)"
            _hover={{
              transform: 'translateY(-55%) scale(1.02)',
            }}
          >
            <FaGoogle fontSize="1.3rem" />
          </Center>
          <Center
            bg="black"
            borderRadius="md"
            p="2"
            color="brand.500"
            border="1px solid white"
            boxShadow="7px 2px 0 black"
            position="absolute"
            left="45%"
            bottom="50%"
            transform="translateY(-50%)"
            transition="transform 0.2s cubic-bezier(0.22, 1, 0.36, 1)"
            _hover={{
              transform: 'translateY(-55%) scale(1.02)',
            }}
          >
            <FaTwitch fontSize="1.3rem" />
          </Center>
        </VStack>
      </HStack>
    </Center>
  );
};
