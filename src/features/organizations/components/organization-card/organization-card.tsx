import { HStack, Skeleton, Text } from '@chakra-ui/react';
import Image from 'next/image';

import { Link } from '@/components/link';

import { Organization } from '../../types';

type OrganizationCardProps = {
  organization: Organization;
};

export const OrganizationCard = ({
  organization,
}: OrganizationCardProps) => {
  return (
    <HStack
      as={Link}
      href={`/organizations/${organization.id}`}
      justifyContent="flex-start"
      w="full"
      maxW="md"
      data-testid={`organization-card-${organization.id}`}
      border="1px solid black"
      p="3"
      borderRadius="md"
      boxShadow="5px 5px 0 black"
      bg="white"
      _hover={{
        transform: 'translateY(-2px)',
        textDecoration: 'none',
      }}
    >
      <Image
        src={
          organization.profileImage ??
          'https://via.placeholder.com/50'
        }
        alt={organization.name}
        width="50"
        height="50"
        style={{
          objectFit: 'cover',
        }}
      />

      <Text fontWeight="bold">{organization.name}</Text>
    </HStack>
  );
};

const OrganizationCardSkeleton = () => {
  return (
    <HStack w="full" maxW="md">
      <Skeleton h="50px" w="50px" borderRadius="md" />
      <Skeleton h="20px" w="50%" borderRadius="md" />;
    </HStack>
  );
};

OrganizationCard.Skeleton = OrganizationCardSkeleton;
