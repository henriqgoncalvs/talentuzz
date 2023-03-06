import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  HStack,
  Skeleton,
  Tag,
  Text,
  VStack,
} from '@chakra-ui/react';
import Image from 'next/image';
import { FaMapMarkerAlt, FaSuitcase } from 'react-icons/fa';

import { Link } from '@/components/link';

import { JobWithOrganization } from '../../types';

type JobCardProps = {
  job: JobWithOrganization;
};

export const JobCard = ({ job }: JobCardProps) => {
  return (
    <Card w="full" maxW="md">
      <CardHeader>
        <HStack justifyContent="space-between" w="full">
          <Center
            bg="white"
            borderRadius="md"
            color="black"
            border="1px solid black"
            boxShadow="5px 5px 0 black"
            w="40px"
            h="40px"
          >
            {job.organization?.profileImage ? (
              <Image
                src={job.organization.profileImage}
                alt={job.organization.name}
                width="40"
                height="40"
                style={{
                  objectFit: 'cover',
                }}
              />
            ) : (
              <FaSuitcase fontSize="25px" />
            )}
          </Center>

          <Tag bg="secondary.500">{job.department}</Tag>
        </HStack>
      </CardHeader>

      <CardBody>
        <VStack alignItems="flex-start" spacing="3">
          <Text fontSize="sm" color="gray.400">
            {job.organization?.name || '--'}
          </Text>
          <Text fontSize="3xl" fontWeight="bold" lineHeight="7">
            {job.position}
          </Text>
          <HStack>
            <FaMapMarkerAlt />
            <Text fontSize="sm">{job.location}</Text>
          </HStack>
        </VStack>
      </CardBody>

      <CardFooter>
        <Link
          href={`/organizations/${job.organization.id}/jobs/${job.id}`}
          variant="solid"
          w="full"
        >
          See more
        </Link>
      </CardFooter>
    </Card>
  );
};

const JobCardSkeleton = () => {
  return (
    <Card w="full" maxW="md">
      <CardHeader>
        <HStack justifyContent="space-between" w="full">
          <Skeleton
            h="10"
            w="10"
            borderRadius="md"
            boxShadow="5px 5px 0 black"
          />

          <Skeleton h="25px" w="30%" borderRadius="md" />
        </HStack>
      </CardHeader>

      <CardBody>
        <VStack alignItems="flex-start" spacing="3">
          <Skeleton h="20px" w="50%" borderRadius="md" />
          <Skeleton h="35px" w="full" borderRadius="md" />
          <Skeleton h="20px" w="35%" borderRadius="md" />
        </VStack>
      </CardBody>

      <CardFooter>
        <Skeleton h="10" w="full" borderRadius="md" />
      </CardFooter>
    </Card>
  );
};

JobCard.Skeleton = JobCardSkeleton;
