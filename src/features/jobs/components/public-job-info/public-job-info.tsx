import { ViewIcon } from '@chakra-ui/icons';
import { Heading, HStack, Text, VStack } from '@chakra-ui/react';

import { Content } from '@/components/content';
import { Link } from '@/components/link';
import { Organization } from '@/features/organizations';

import { Job } from '../../types';

export const PublicJobInfo = ({
  job,
  organization,
}: {
  job: Job;
  organization: Organization;
}) => {
  return (
    <>
      <VStack pt="16" pb="4" spacing="8">
        <Heading size="2xl">{job?.position}</Heading>
        <HStack spacing="12">
          <Text>{job?.department}</Text>
          <Text>{job?.location}</Text>
        </HStack>
        <Link
          href={`/organizations/${organization?.id}`}
          variant="outline"
          icon={<ViewIcon />}
        >
          View More Jobs from {organization?.name}
        </Link>
      </VStack>
      <Content>{job.info}</Content>
    </>
  );
};
