import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    'brand-black': '#0E0C0F',
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
