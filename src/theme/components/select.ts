import { defineStyleConfig } from '@chakra-ui/react';

export default defineStyleConfig({
  baseStyle: {
    field: {
      outline: '1px solid black',
      bg: 'white',
    },
  },
  variants: {
    filled: {
      field: {
        bg: 'white',
        _focusVisible: {
          bg: 'white',
        },
      },
    },
  },
  defaultProps: {
    variant: 'filled',
  },
});
