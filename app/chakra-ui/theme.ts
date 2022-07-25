import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    'brand-black': '#0E0C0F',
  },
  fonts: {
    heading:
      'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    body: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
  styles: {
    global: {
      body: {
        bg: 'brand-black',
        color: 'white',
      },
    },
  },
});

export default theme;
