import { defineStyleConfig } from '@chakra-ui/react';

import { dm_serif } from '../foundations/fonts';

export default defineStyleConfig({
  baseStyle: {
    fontFamily: dm_serif.style.fontFamily,
    fontWeight: dm_serif.style.fontWeight,
    fontStyle: dm_serif.style.fontStyle,
  },
});
