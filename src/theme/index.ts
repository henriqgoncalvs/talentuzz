import { extendTheme } from '@chakra-ui/react';

import Button from './components/button';
import Heading from './components/heading';
import Input from './components/input';
import Text from './components/text';
import Textarea from './components/text-area';
import { colors, styles } from './foundations';

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
});
