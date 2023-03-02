import { extendTheme } from '@chakra-ui/react';

import Button from './components/button';
import Heading from './components/heading';
import Input from './components/input';
import Text from './components/text';
import Textarea from './components/text-area';
import { colors, styles } from './foundations';
import { clash_display } from './foundations/fonts';

export const theme = extendTheme({
  colors,
  styles,
  components: {
    Button,
    Heading,
    Input,
    Text,
    Textarea,
  },
  fonts: {
    'clash-display': clash_display.style.fontFamily,
  },
});
