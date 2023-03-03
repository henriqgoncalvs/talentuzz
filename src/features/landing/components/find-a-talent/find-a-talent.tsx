import {
  Box,
  Center,
  Container,
  Heading,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';
import Image from 'next/image';

import { Link } from '@/components/link';

export const FindATalentSection = () => {
  return (
    <Box
      position="relative"
      color="secondary.500"
      h="60vh"
      as="section"
    >
      <Center
        flexDirection="column"
        bg="black"
        position="absolute"
        left="calc(-50vw + 50%)"
        width="100vw"
        h="full"
      >
        <Container maxW="container.lg">
          <HStack w="full" alignItems="stretch" spacing="10">
            <Box
              flex="1"
              w="full"
              minH="full"
              position="relative"
              border="3px solid white"
            >
              <Image
                src="/assets/img/find-a-talent.webp"
                alt="3 girls in a meeting talking"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                  height: '100%',
                }}
                width={2048}
                height={1365}
              />
            </Box>
            <VStack
              flex="1"
              flexDirection="column"
              w="full"
              h="full"
              alignItems="flex-start"
              spacing="8"
            >
              <Heading size="3xl" as="h2" lineHeight="shorter">
                Solution for finding the
                <Text
                  as="span"
                  display="block"
                  position="relative"
                  textDecor="underline"
                >
                  best talents
                </Text>
              </Heading>
              <Text fontSize="md" maxW="2xl">
                More than 1000 startups find their pro talent
                here. We connect the best professionals with you
                to help you grow your business.
              </Text>

              <Link
                href={'/dashboard/jobs'}
                variant="solid"
                boxShadow="5px 5px 0px white"
              >
                Start posting jobs
              </Link>
            </VStack>
          </HStack>
        </Container>
      </Center>
    </Box>
  );
};
