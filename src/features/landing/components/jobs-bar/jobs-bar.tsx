import { Box, HStack, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { BsFillMegaphoneFill } from 'react-icons/bs';
import { IoColorPaletteSharp } from 'react-icons/io5';
import {
  RiDatabase2Fill,
  RiPencilRuler2Fill,
} from 'react-icons/ri';
import { TbCode } from 'react-icons/tb';

const JobBox = ({
  children,
  icon,
}: {
  children: string;
  icon: ReactNode;
}) => {
  return (
    <>
      <Text whiteSpace="nowrap">{children}</Text>
      <Box fontSize="1.2rem">{icon}</Box>
    </>
  );
};

export const JobsBarSection = () => {
  return (
    <Box
      position="relative"
      color="secondary.500"
      h="min-content"
      as="section"
    >
      <HStack
        bg="black"
        position="absolute"
        left="calc(-50vw + 50%)"
        width="100vw"
        py="8"
        px="5"
        textAlign="center"
        h="full"
        alignItems="center"
        justifyContent="space-between"
        spacing="5"
        overflowX="scroll"
        overflowY="hidden"
      >
        <JobBox icon={<RiPencilRuler2Fill />}>
          Product designer
        </JobBox>
        <JobBox icon={<BsFillMegaphoneFill />}>Marketing</JobBox>
        <JobBox icon={<TbCode />}>Front-end</JobBox>
        <JobBox icon={<IoColorPaletteSharp />}>
          UI designer
        </JobBox>
        <JobBox icon={<RiDatabase2Fill />}>Back-end</JobBox>
        <Text>3d illustrator</Text>
      </HStack>
    </Box>
  );
};
