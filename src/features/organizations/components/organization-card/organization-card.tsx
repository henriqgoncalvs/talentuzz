import {
  Center,
  HStack,
  Skeleton,
  Text,
  VStack,
} from '@chakra-ui/react';
import Image from 'next/image';
import { FaSuitcase } from 'react-icons/fa';

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
      spacing="4"
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
      {organization.profileImage ? (
        <Image
          src={organization.profileImage}
          alt={organization.name}
          width="50"
          height="50"
          style={{
            objectFit: 'cover',
          }}
        />
      ) : (
        <Center
          border="1px solid black"
          borderRadius="md"
          w="50px"
          h="50px"
        >
          <FaSuitcase fontSize="25px" />
        </Center>
      )}

      <VStack spacing="1" alignItems="flex-start">
        <Text fontWeight="bold">{organization.name}</Text>
        <Text fontSize="sm" color="gray.500" fontWeight="normal">
          {organization.location.length > 17
            ? `${organization.location.substring(0, 16)}...`
            : organization.location}
        </Text>
      </VStack>
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
