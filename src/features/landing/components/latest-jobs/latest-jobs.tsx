import {
  Box,
  Grid,
  Heading,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { BsArrowRight } from 'react-icons/bs';

import { Link } from '@/components/link';
import { JobCard, JobWithOrganization } from '@/features/jobs';

type LatestJobsSectionProps = {
  jobs: JobWithOrganization[];
};

export const LatestJobsSection = ({
  jobs,
}: LatestJobsSectionProps) => {
  return (
    <VStack as="section" w="full" mt="20" spacing="10">
      <HStack alignItems="flex-end" w="full">
        <VStack alignItems="flex-start" spacing="8" w="full">
          <Heading size="2xl">Latest jobs</Heading>
          <Text color="muted">
            The latest jobs on Talentuzz right now, don&apos;t
            waste time.
          </Text>
        </VStack>
        <Link href="/jobs" rightIcon={<BsArrowRight />}>
          View all
        </Link>
      </HStack>

      <Box mt="16" mx="auto" w="full">
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
          }}
          gap="8"
        >
          {jobs.length ? (
            jobs.map((job) => <JobCard key={job.id} job={job} />)
          ) : (
            <Text>No jobs found</Text>
          )}
        </Grid>
      </Box>
    </VStack>
  );
};
