import { Box } from '@chakra-ui/react';

export type ContentP = {
  children: string;
};

export const Content = ({ children }: ContentP) => {
  return (
    <Box lineHeight="7" letterSpacing="wide" my="4">
      {children}
    </Box>
  );
};
