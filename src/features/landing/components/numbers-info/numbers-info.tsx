import { Center, Heading, HStack, Text } from '@chakra-ui/react';

export const NumbersInfoSection = () => {
  return (
    <HStack
      as="section"
      w="full"
      mt="20"
      justifyContent="space-between"
      spacing="0"
      position="relative"
      flexDir={{ base: 'column', md: 'row' }}
      _before={{
        content: '""',
        position: 'absolute',
        left: 0,
        top: 0,
        w: '100px',
        h: 'full',
        bg: 'linear-gradient(to right, #F3F2F0, #F3F2F0 10%, transparent)',
      }}
      _after={{
        content: '""',
        position: 'absolute',
        right: 0,
        top: 0,
        w: '100px',
        h: 'full',
        bg: 'linear-gradient(to left, #F3F2F0, #F3F2F0 10%, transparent)',
      }}
    >
      <Center
        flexDirection="column"
        flex="1"
        borderY="1px solid black"
        p="10"
        w={{ base: 'full', md: 'initial' }}
      >
        <Heading mb="2">130K+</Heading>
        <Text>Tech Jobs</Text>
      </Center>
      <Center
        flexDirection="column"
        flex="1"
        borderY={{ base: 'none', md: '1px solid black' }}
        borderX={{ base: 'none', md: '1px solid black' }}
        p="10"
        w={{ base: 'full', md: 'initial' }}
      >
        <Heading mb="2">6,000,000</Heading>
        <Text>Matches Made</Text>
      </Center>
      <Center
        flexDirection="column"
        flex="1"
        borderY="1px solid black"
        p="10"
        w={{ base: 'full', md: 'initial' }}
      >
        <Heading mb="2">8M+</Heading>
        <Text>Startup-ready candidates</Text>
      </Center>
    </HStack>
  );
};
