import { extendTheme, theme as baseTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    'brand-black': '#0E0C0F',
    brand: {
      '50': '#F9E5CF',
      '100': '#F3CDA2',
      '200': '#F0C18B',
      '300': '#EDB475',
      '400': '#EAA85E',
      '500': '#E49031',
      '600': '#C8761A',
      '700': '#B16917',
      '800': '#9B5C14',
      '900': '#6E410E',
    },
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
  components: {
    Link: {
      baseStyle: {
        _hover: {
          textDecoration: 'none',
        },
      },
    },
    Button: {
      variants: {
        primary: {
          bg: 'brand.500',
          color: '#141414',
          borderRadius: 'none',
          _hover: {
            bg: 'brand.600',
          },
          _active: {
            bg: 'brand.700',
          },
          _focus: {
            ring: 2,
            ringColor: 'brand.500',
          },
        },
      },
    },
  },
});

export default theme;
