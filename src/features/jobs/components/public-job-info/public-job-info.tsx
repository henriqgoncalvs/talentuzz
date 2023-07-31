import {
  Center,
  Flex,
  Heading,
  HStack,
  IconButton,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import Image from 'next/image';
import { FaMapMarkerAlt, FaSuitcase } from 'react-icons/fa';
import { RxShare1 } from 'react-icons/rx';

import { Content } from '@/components/content';
import { Link } from '@/components/link';
import { Organization } from '@/features/organizations';

import { Job } from '../../types';
import { formatJobData } from '../../utils/format-job-data';

export const PublicJobInfo = ({
  job,
  organization,
}: {
  job: Job;
  organization: Organization;
}) => {
  return (
    <>
      <Flex
        w="full"
        alignItems={{ base: 'flex-start', md: 'center' }}
        justifyContent="space-between"
        direction={{ base: 'column', md: 'row' }}
        p="7"
        border="1px solid black"
        bg="white"
        borderRadius="lg"
        gap={7}
      >
        <VStack spacing="6" alignItems="flex-start">
          <HStack alignItems="center" spacing="4" w="full">
            <Center
              bg="white"
              borderRadius="md"
              color="black"
              border="1px solid black"
              boxShadow="5px 5px 0 black"
              w="40px"
              h="40px"
            >
              {organization.profileImage ? (
                <Image
                  src={organization.profileImage}
                  alt={organization.name}
                  width="40"
                  height="40"
                  style={{
                    objectFit: 'cover',
                  }}
                />
              ) : (
                <FaSuitcase fontSize="20px" />
              )}
            </Center>

            <Text as="h3">{organization.name}</Text>
          </HStack>

          <VStack spacing="2" alignItems="flex-start">
            <Heading as="h1">{job?.position}</Heading>
            <HStack>
              <FaMapMarkerAlt />
              <Text>{job.location}</Text>
            </HStack>
          </VStack>
        </VStack>

        <HStack
          w={{ base: 'full', md: 'auto' }}
          alignItems="center"
          justifyContent="center"
          spacing="3"
          alignSelf="flex-end"
        >
          <IconButton
            aria-label="Share"
            icon={<RxShare1 fontSize="1.3rem" />}
            variant="outline"
          />

          <Link
            variant="solid"
            w="full"
            maxW="200px"
            as="a"
            href={`mailto:${organization?.email}?subject=
 Application for ${job.position} position`}
            target="_blank"
          >
            Apply now
          </Link>
        </HStack>
      </Flex>

      <VStack w="full" mt="4">
        <HStack
          w="full"
          alignItems="center"
          justifyContent="space-between"
          borderBottom="1px solid"
          borderBottomColor="gray.300"
          p="3"
        >
          <Text fontWeight="bold">Experience Level</Text>
          <Text as="h3">
            {formatJobData(
              job.experienceLevel,
              'experienceLevel'
            )}
          </Text>
        </HStack>
        <HStack
          w="full"
          alignItems="center"
          justifyContent="space-between"
          borderBottom="1px solid"
          borderBottomColor="gray.300"
          p="3"
        >
          <Text fontWeight="bold">Salary</Text>
          <Text as="h3">
            {formatJobData(job.salaryRange, 'salaryRange')}
          </Text>
        </HStack>
        <HStack
          w="full"
          alignItems="center"
          justifyContent="space-between"
          borderBottom="1px solid"
          borderBottomColor="gray.300"
          p="3"
        >
          <Text fontWeight="bold">Job Type</Text>
          <Text as="h3">
            {formatJobData(job.employmentType, 'employmentType')}
          </Text>
        </HStack>
        <HStack
          w="full"
          alignItems="center"
          justifyContent="space-between"
          borderBottom="1px solid"
          borderBottomColor="gray.300"
          p="3"
        >
          <Text fontWeight="bold">Location</Text>
          <Text as="h3">{job.location}</Text>
        </HStack>
      </VStack>

      <Heading as="h2" pt="7" pb="3" fontSize="2xl">
        Description
      </Heading>
      <Content>{job.info}</Content>
    </>
  );
};
