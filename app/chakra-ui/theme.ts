import { extendTheme, theme as baseTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    'brand-black': '#0E0C0F',
  },
  fonts: {
    body: `Inter, ${baseTheme.fonts.body}`,
    heading: `Inter, ${baseTheme.fonts.heading}`,
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
