import { Box, Grid, Text } from '@chakra-ui/react';

import { JobWithOrganization } from '../../types';
import { JobCard } from '../job-card';

type JobsListProps = {
  jobs: JobWithOrganization[];
  isLoading?: boolean;
};

export const JobsList = ({ jobs, isLoading }: JobsListProps) => {
  return (
    <Box mt="16" mx="auto" w="full">
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)',
        }}
        gap="8"
      >
        {isLoading ? (
          Array.from({ length: 6 }).map(() => (
            <JobCard.Skeleton key={Math.random()} />
          ))
        ) : jobs.length ? (
          jobs.map((job) => <JobCard key={job.id} job={job} />)
        ) : (
          <Text>No jobs found</Text>
        )}
      </Grid>
    </Box>
  );
};
