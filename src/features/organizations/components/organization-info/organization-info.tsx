import { EditIcon } from '@chakra-ui/icons';
import { Center, Heading, Stack } from '@chakra-ui/react';

import { Content } from '@/components/content';
import { InfoCard } from '@/components/info-card';
import { Link } from '@/components/link';

import { Organization } from '../../types';

type OrganizationInfoProps = {
  organization: Organization;
  type?: 'public' | 'dashboard';
};

export const OrganizationInfo = ({
  organization,
  type = 'public',
}: OrganizationInfoProps) => {
  return (
    <>
      <Stack
        w="full"
        alignItems="center"
        justifyContent="space-between"
        direction={{ base: 'column', md: 'row' }}
      >
        <Heading>{organization?.name}</Heading>
        <Stack
          w={{ base: 'full', md: 'auto' }}
          direction={{ base: 'column', md: 'row' }}
        >
          <InfoCard label="Email" value={organization.email} />
          <InfoCard
            label="Phone Number"
            value={organization.phone}
          />

          {type === 'dashboard' && (
            <Center>
              <Link
                href={`/dashboard/organization/edit`}
                icon={<EditIcon />}
                variant="solid"
              >
                Edit
              </Link>
            </Center>
          )}
        </Stack>
      </Stack>

      <Content>{organization.info}</Content>
    </>
  );
};
