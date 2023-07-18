import {
  Box,
  Heading,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';

import { Content } from '@/components/content';
import { Link } from '@/components/link';
import { useUser } from '@/features/auth';

import { Job } from '../../types';

export const DashboardJobInfo = ({ job }: { job: Job }) => {
  const { data: user } = useUser();

  return (
    <VStack>
      <VStack pt="16" pb="4" spacing="8">
        <Link
          href={`/organizations/${user?.organization.id}/jobs/${job.id}`}
        >
          View Public Job Page
        </Link>
        <Heading size="2xl">{job.position}</Heading>
        <HStack spacing="12">
          <Text>{job.department}</Text>
          <Text>{job.location}</Text>
        </HStack>
      </VStack>
      <Box w="full">
        <Content>{job.info}</Content>
      </Box>
    </VStack>
  );
};
