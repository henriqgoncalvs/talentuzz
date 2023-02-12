import {
  Box,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';

export type InfoCardP = {
  label: string;
  value: string;
};

export const InfoCard = ({ label, value }: InfoCardP) => {
  return (
    <Box
      p="4"
      bg="white"
      borderRadius="lg"
      boxShadow="sm"
    >
      <Stack>
        <Text fontSize="sm" color="muted">
          {label}
        </Text>
        <Heading size="sm">{value}</Heading>
      </Stack>
    </Box>
  );
};
