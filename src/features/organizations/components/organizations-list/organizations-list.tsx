import {
  Box,
  Grid,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';

import { Organization } from '../../types';
import { OrganizationCard } from '../organization-card';

type OrganizationsListProps = {
  organizations: Organization[];
};

export const OrganizationsList = ({
  organizations,
}: OrganizationsListProps) => {
  return (
    <VStack as="section" w="full" mt="20" spacing="10">
      <Heading>Find a job at one of these startups.</Heading>

      <Box mt="16" mx="auto" w="full">
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
            xl: 'repeat(4, 1fr)',
          }}
          gap="8"
        >
          {organizations.length ? (
            organizations.map((organization) => (
              <OrganizationCard
                key={organization.id}
                organization={organization}
              />
            ))
          ) : (
            <Text>No jobs found</Text>
          )}
        </Grid>
      </Box>
    </VStack>
  );
};
