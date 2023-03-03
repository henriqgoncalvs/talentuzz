import { theme as baseTheme } from '@chakra-ui/react';

import { dm_sans } from './fonts';

export const colors = {
  brand: {
    50: '#E1DDFE',
    100: '#E1DDFE',
    200: '#E1DDFE',
    300: '#D0CAFF',
    400: '#D0CAFF',
    500: '#C0B6FF',
    600: '#AFA3FF',
    700: '#AF93FF',
    800: '#825DE8',
    900: '#392278',
  },
  secondary: {
    50: '#DCFEC1',
    100: '#DCFEC1',
    200: '#DCFEC1',
    300: '#CAFBA2',
    400: '#CAFBA2',
    500: '#CAFBA2',
    600: '#CAFBA2',
    700: '#B6FD80',
    800: '#9ad66c',
    900: '#9ad66c',
  },
  accent: '#000',
  bg: '#F3F2F0',
};

export const styles = {
  global: {
    'html, body': {
      height: '100%',
      bg: 'bg',
      fontFamily: `${dm_sans.style.fontFamily}, ${baseTheme.fonts.body}`,
    },

    body: {
      overflowX: 'hidden',
    },

    '#__next': {
      height: '100%',
      bg: 'bg',
      fontFamily: `${dm_sans.style.fontFamily}, ${baseTheme.fonts.body}`,
    },
  },
};
