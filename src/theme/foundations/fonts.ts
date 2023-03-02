import { DM_Sans, DM_Serif_Display } from 'next/font/google';
import localFont from 'next/font/local';

export const dm_serif = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-serif',
});
export const dm_sans = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const clash_display = localFont({
  src: './font-files/clash-display.woff2',
  weight: '400',
  style: 'normal',
});
