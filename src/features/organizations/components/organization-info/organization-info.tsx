import { EditIcon } from '@chakra-ui/icons';
import {
  Center,
  Heading,
  HStack,
  IconButton,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import Image from 'next/image';
import { FaMapMarkerAlt, FaSuitcase } from 'react-icons/fa';
import { RxShare1 } from 'react-icons/rx';

import { Content } from '@/components/content';
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
        p="7"
        border="1px solid black"
        bg="white"
        borderRadius="lg"
      >
        <VStack spacing="6" alignItems="flex-start">
          <Center
            bg="white"
            borderRadius="md"
            color="black"
            border="1px solid black"
            boxShadow="5px 5px 0 black"
            w="60px"
            h="60px"
          >
            {organization.profileImage ? (
              <Image
                src={organization.profileImage}
                alt={organization.name}
                width="60"
                height="60"
                style={{
                  objectFit: 'cover',
                }}
              />
            ) : (
              <FaSuitcase fontSize="40px" />
            )}
          </Center>

          <VStack spacing="2" alignItems="flex-start">
            <Heading as="h1">{organization?.name}</Heading>
            <HStack>
              <FaMapMarkerAlt />
              <Text>{organization.location}</Text>
            </HStack>
          </VStack>
        </VStack>

        <Stack
          w={{ base: 'full', md: 'auto' }}
          direction={{ base: 'column', md: 'row' }}
          alignItems="center"
          justifyContent="center"
          spacing="3"
          alignSelf={
            type === 'dashboard' ? 'flex-start' : 'flex-end'
          }
        >
          {type === 'dashboard' ? (
            <Link
              href={`/dashboard/organization/edit`}
              icon={<EditIcon />}
              variant="solid"
            >
              Edit
            </Link>
          ) : (
            <>
              <IconButton
                aria-label="Share"
                icon={<RxShare1 fontSize="1.3rem" />}
                variant="outline"
              />

              <Link
                href="#jobs-list"
                variant="solid"
                w="full"
                maxW="200px"
              >
                See jobs
              </Link>
            </>
          )}
        </Stack>
      </Stack>

      <VStack w="full" mt="4">
        <HStack
          w="full"
          alignItems="center"
          justifyContent="space-between"
          borderBottom="1px solid"
          borderBottomColor="gray.300"
          p="3"
        >
          <Text fontWeight="bold">E-mail</Text>
          <Text as="h3">{organization.email}</Text>
        </HStack>
        <HStack
          w="full"
          alignItems="center"
          justifyContent="space-between"
          borderBottom="1px solid"
          borderBottomColor="gray.300"
          p="3"
        >
          <Text fontWeight="bold">Phone</Text>
          <Text as="h3">{organization.phone}</Text>
        </HStack>
      </VStack>

      <Heading as="h2" pt="7" pb="3" fontSize="2xl">
        Description
      </Heading>
      <Content>{organization.info}</Content>
    </>
  );
};
