import {
  Box,
  Container,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  Tag,
  Text,
  VStack,
} from '@chakra-ui/react';
import { ReactElement } from 'react';
import {
  FaCertificate,
  FaMapMarkerAlt,
  FaSearch,
} from 'react-icons/fa';

import { Button } from '@/components/button';
import { Seo } from '@/components/seo';
import { PublicLayout } from '@/layouts/public-layout';

const PublicJobsPage = () => {
  return (
    <>
      <Seo title="Jobs" />

      <Container role="banner" maxW="container.lg">
        <Box textAlign="center" minH="50vh" position="relative">
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
              <Text as="span" textDecor="underline">
                dream job
              </Text>
            </Heading>
            <HStack
              flexWrap="wrap"
              alignItems="center"
              justifyContent="center"
              maxW="container.sm"
              gap="3"
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

            <HStack pt="10">
              <InputGroup size="lg" variant="filled">
                <InputLeftAddon>
                  <FaCertificate />
                </InputLeftAddon>
                <Input placeholder="Web Design" />
              </InputGroup>
              <InputGroup size="lg" variant="filled">
                <InputLeftAddon>
                  <FaMapMarkerAlt />
                </InputLeftAddon>
                <Input placeholder="New York City" />
              </InputGroup>
              <Button
                icon={<FaSearch />}
                minWidth="min-content"
                variant="outline"
                size="lg"
              >
                Search
              </Button>
            </HStack>
          </VStack>
        </Box>
      </Container>
    </>
  );
};

PublicJobsPage.getLayout = function getLayout(
  page: ReactElement
) {
  return <PublicLayout>{page}</PublicLayout>;
};

export default PublicJobsPage;
