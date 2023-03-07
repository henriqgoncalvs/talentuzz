import {
  Center,
  Heading,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';
import {
  FaBuilding,
  FaGoogle,
  FaSuitcase,
  FaTwitch,
} from 'react-icons/fa';

import { Link } from '@/components/link';

export const PublicOrganizationPageHeroSection = () => {
  return (
    <Center
      flexDirection="column"
      minH="60vh"
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
            You&apos;ll find jobs at{' '}
            <Text
              as="span"
              position="relative"
              textDecor="underline"
            >
              startups
            </Text>{' '}
            and{' '}
            <Text
              as="span"
              position="relative"
              textDecor="underline"
            >
              brands.
            </Text>
          </Heading>
          <Text
            fontSize={{ base: 'lg', md: 'xl' }}
            maxW="2xl"
            color="muted"
          >
            Find jobs at any level of experience in a variety of
            industries at our 130k remote and local job listings.
          </Text>
          <HStack spacing="5">
            <Link href={'/jobs'} variant="solid">
              Find your next job
            </Link>
            <Link href={'/dashboard/jobs'} variant="outline">
              I&apos;m a startup
            </Link>
          </HStack>
        </VStack>
        <VStack
          flex="1"
          w="full"
          minH="full"
          position="relative"
          transform="rotateY(-20deg) rotateX(-5deg) rotateZ(1deg) perspective(600px)"
        >
          <VStack
            bg="white"
            p="10"
            justifyContent="center"
            alignItems="center"
            spacing="3"
            w="250px"
            borderRadius="md"
            border="1px solid black"
            boxShadow="7px 2px 0 black"
            position="absolute"
            bottom="30%"
            left="40%"
            transform="translate(-50%, 50%)"
            transition="transform 0.2s cubic-bezier(0.22, 1, 0.36, 1)"
            _hover={{
              transform: 'translate(-50%, 45%) scale(1.02)',
            }}
          >
            <Center
              border="1px solid black"
              borderRadius="full"
              p="5"
              color="brand.500"
            >
              <FaSuitcase fontSize="2rem" />
            </Center>
            <Text fontSize="4xl" fontWeight="bold">
              45.7K
            </Text>
            <Text fontSize="xl">Remote jobs</Text>
          </VStack>
          <HStack
            bg="brand.500"
            py="5"
            px="10"
            justifyContent="space-between"
            alignItems="flex-start"
            spacing="8"
            borderRadius="md"
            border="1px solid black"
            boxShadow="7px 2px 0 black"
            position="absolute"
            right="0rem"
            top="2rem"
            transform="translateY(-35%)"
            transition="transform 0.2s cubic-bezier(0.22, 1, 0.36, 1)"
            _hover={{
              transform: 'translateY(-40%) scale(1.02)',
            }}
          >
            <Center
              border="1px solid black"
              borderRadius="full"
              p="5"
              color="black"
              bg="white"
            >
              <FaBuilding fontSize="2rem" />
            </Center>
            <VStack alignItems="flex-start">
              <Text fontSize="2xl" fontWeight="bold">
                66.8K
              </Text>
              <Text fontSize="md">Full Time</Text>
            </VStack>
          </HStack>
          <Center
            bg="gray.500"
            borderRadius="md"
            p="2"
            color="secondary.500"
            border="1px solid white"
            boxShadow="7px 2px 0 black"
            position="absolute"
            left="5%"
            top="20%"
            transform="translateY(-50%)"
            transition="transform 0.2s cubic-bezier(0.22, 1, 0.36, 1)"
            _hover={{
              transform: 'translateY(-55%) scale(1.02)',
            }}
          >
            <FaGoogle fontSize="4rem" />
          </Center>
          <Center
            bg="black"
            borderRadius="md"
            p="2"
            color="brand.500"
            border="1px solid white"
            boxShadow="7px 2px 0 black"
            position="absolute"
            right="0%"
            bottom="20%"
            transform="translateY(-50%)"
            transition="transform 0.2s cubic-bezier(0.22, 1, 0.36, 1)"
            _hover={{
              transform: 'translateY(-55%) scale(1.02)',
            }}
          >
            <FaTwitch fontSize="3.5rem" />
          </Center>
        </VStack>
      </HStack>
    </Center>
  );
};
