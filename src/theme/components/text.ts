import { defineStyleConfig } from '@chakra-ui/react';

import { dm_sans } from '../foundations/fonts';

export default defineStyleConfig({
  baseStyle: {
    fontWeight: dm_sans.style.fontWeight,
    fontStyle: dm_sans.style.fontStyle,
  },
});
