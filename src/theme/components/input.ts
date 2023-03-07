import { defineStyleConfig } from '@chakra-ui/react';

export default defineStyleConfig({
  baseStyle: {
    field: {
      outline: '1px solid black',
    },
    addon: {
      outline: '1px solid black',
    },
  },
  variants: {
    filled: {
      field: {
        bg: 'white',
        _focusVisible: {
          bg: 'gray.100',
        },
        boxShadow: '5px 5px 0px black',
      },
      addon: {
        bg: 'secondary.500',
        boxShadow: '5px 5px 0px black',
      },
    },
  },
});
