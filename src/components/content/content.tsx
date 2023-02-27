import { Box, Text } from '@chakra-ui/react';

export type ContentP = {
  children: string;
};

export const Content = ({ children }: ContentP) => {
  return (
    <Box my="4">
      <Text lineHeight="7" letterSpacing="wide">
        {children}
      </Text>
    </Box>
  );
};
