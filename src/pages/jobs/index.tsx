import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  Tag,
  Text,
  VStack,
} from '@chakra-ui/react';
import { ReactElement, useEffect, useState } from 'react';
import {
  FaCertificate,
  FaMapMarkerAlt,
  FaSearch,
} from 'react-icons/fa';

import { Button } from '@/components/button';
import { Seo } from '@/components/seo';
import {
  FilterJobsList,
  JobsList,
  JobWithOrganization,
  useJobsWithOrganization,
  useJobsFilters,
} from '@/features/jobs';
import { PublicLayout } from '@/layouts/public-layout';

const PublicJobsPage = () => {
  const { filters } = useJobsFilters();

  const {
    data: jobs,
    isLoading,
    refetch,
  } = useJobsWithOrganization({
    includes: ['organization'],
    filters,
  });

  useEffect(() => {
    if (filters) {
      refetch();
    }
  }, [filters, refetch]);

  return (
    <>
      <Seo title="Jobs" />

      <Container role="banner" maxW="container.lg">
        <PublicJobsPageHeader />
        <VStack
          w="full"
          spacing="5"
          mt="5"
          alignItems="flex-start"
        >
          <Text>Search results - {123}</Text>
          <Divider borderColor="gray.300" />
          <Flex
            w="full"
            alignItems="flex-start"
            justifyContent="space-between"
            gap={{ base: '0', md: '5' }}
            flexDirection={{ base: 'column', md: 'row' }}
          >
            <FilterJobsList />
            <JobsList
              isLoading={isLoading}
              jobs={jobs as JobWithOrganization[]}
            />
          </Flex>
        </VStack>
      </Container>
    </>
  );
};

const PublicJobsPageHeader = () => {
  const { filters, addFilter } = useJobsFilters();
  const [position, setPosition] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    if (filters) {
      if (filters.position) setPosition(filters.position[0]);
      if (filters.location) setLocation(filters.location[0]);
    }
  }, [filters]);

  return (
    <Box
      textAlign="center"
      minH={{ base: '60vh', md: '50vh' }}
      position="relative"
    >
      <VStack
        left="calc(-50vw + 50%)"
        top="-20"
        width="100vw"
        height="calc(100% + 5rem)"
        position="absolute"
        bg="brand.500"
        alignItems="center"
        justifyContent="center"
        spacing="10"
      >
        <Heading fontSize="7xl">
          Find your{' '}
          <Text
            as="span"
            textDecor="underline"
            wordBreak="break-word"
          >
            dream job
          </Text>
        </Heading>
        <HStack
          flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
          maxW="container.sm"
          gap="3"
          display={{ base: 'none', md: 'flex' }}
        >
          {[
            'Product designer',
            'Marketing',
            'Front-end Developer',
            'UI Designer',
            'Graphic Designer',
            'Project Manager',
            'Back-end Developer',
            '3D Illustrator',
          ].map((jobCategory) => (
            <Tag
              bg="transparent"
              border="1px solid black"
              key={jobCategory}
              size="md"
              flexGrow="1"
              px="2"
              display="flex"
              alignItems="center"
              justifyContent="center"
              whiteSpace="nowrap"
              maxW="200px"
            >
              {jobCategory}
            </Tag>
          ))}
        </HStack>

        <Flex
          pt={{ base: '0', md: '10' }}
          flexDir={{ base: 'column', md: 'row' }}
          gap="3"
        >
          <InputGroup size="lg" variant="filled">
            <InputLeftAddon>
              <FaCertificate />
            </InputLeftAddon>
            <Input
              placeholder="Web Design"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
          </InputGroup>
          <InputGroup size="lg" variant="filled">
            <InputLeftAddon>
              <FaMapMarkerAlt />
            </InputLeftAddon>
            <Input
              placeholder="New York City"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </InputGroup>
          <Button
            icon={<FaSearch />}
            minWidth="min-content"
            variant="outline"
            size="lg"
            disabled={!location && !position}
            onClick={() => {
              addFilter('position', position ? [position] : []);
              addFilter('location', location ? [location] : []);
            }}
          >
            Search
          </Button>
        </Flex>
      </VStack>
    </Box>
  );
};

PublicJobsPage.getLayout = function getLayout(
  page: ReactElement
) {
  return <PublicLayout>{page}</PublicLayout>;
};

export default PublicJobsPage;
