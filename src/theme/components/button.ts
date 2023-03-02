import { defineStyleConfig } from '@chakra-ui/react';

export default defineStyleConfig({
  variants: {
    solid: {
      color: 'accent',
      _hover: {
        opacity: 0.9,
      },
      border: '1px solid currentColor',
      position: 'relative',
      boxShadow: '5px 5px 0 black',
      _focus: {
        transform: 'translate(5px, 5px)',
        boxShadow: '0 0 0',
      },
    },
    outline: {
      bg: 'white',
      color: 'accent',
      boxShadow: '5px 5px 0 black',
      colorScheme: 'white',
      _focus: {
        transform: 'translate(5px, 5px)',
        boxShadow: '0 0 0',
      },
    },
    link: {
      color: 'accent',
      colorScheme: 'black',
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'solid',
    colorScheme: 'brand',
  },
});
