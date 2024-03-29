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
import {
  FaDollarSign,
  FaFileContract,
  FaMapMarkerAlt,
  FaSuitcase,
} from 'react-icons/fa';

import { Link } from '@/components/link';

import { JobWithOrganization } from '../../types';
import { formatJobData } from '../../utils/format-job-data';

type JobCardProps = {
  job: JobWithOrganization;
};

export const JobCard = ({ job }: JobCardProps) => {
  return (
    <Card w="full" maxW="md" data-testid={`job-card-${job.id}`}>
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
            {job.organization &&
            job.organization.profileImage ? (
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

          <VStack>
            <Tag
              bg="secondary.500"
              data-testid="job-card-department"
            >
              {job.department}
            </Tag>
            <Tag
              bg="brand.500"
              data-testid="job-card-experience-level"
            >
              {formatJobData(
                job.experienceLevel,
                'experienceLevel'
              )}
            </Tag>
          </VStack>
        </HStack>
      </CardHeader>

      <CardBody>
        <VStack alignItems="flex-start" spacing="3">
          <Text
            fontSize="sm"
            color="gray.400"
            data-testid="job-organization"
          >
            {job.organization ? job.organization?.name : '--'}
          </Text>
          <Text
            fontSize="3xl"
            fontWeight="bold"
            lineHeight="7"
            data-testid="job-card-position"
          >
            {job.position}
          </Text>
          <HStack>
            <FaMapMarkerAlt />
            <Text fontSize="sm" data-testid="job-card-location">
              {job.location}
            </Text>
          </HStack>
          <HStack>
            <FaDollarSign />
            <Text
              fontSize="sm"
              data-testid="job-card-salary-range"
            >
              {formatJobData(job.salaryRange, 'salaryRange')}
            </Text>
          </HStack>
          <HStack>
            <FaFileContract />
            <Text
              fontSize="sm"
              data-testid="job-card-employment-type"
            >
              {formatJobData(
                job.employmentType,
                'employmentType'
              )}
            </Text>
          </HStack>
        </VStack>
      </CardBody>

      <CardFooter>
        <Link
          href={`/organizations/${
            job.organization?.id || '-'
          }/jobs/${job.id}`}
          variant="solid"
          w="full"
          data-testid="job-card-see-more"
        >
          See more
        </Link>
      </CardFooter>
    </Card>
  );
};

const JobCardSkeleton = () => {
  return (
    <Card w="full" maxW="md" data-testid="skeleton">
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
