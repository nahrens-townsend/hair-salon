import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const colors = {
  warm: {
    50: '#FAF8F5',
    100: '#D5D1C8',
    200: '#BCB5AD',
    300: '#BCA992',
    400: '#A27B59',
    500: '#6F6052',
    900: '#2D2520',
  },
  brand: {
    50: '#FAF8F5',
    100: '#D5D1C8',
    200: '#BCB5AD',
    300: '#BCA992',
    400: '#A27B59',
    500: '#6F6052',
    600: '#5a4d43',
    700: '#463c35',
    800: '#322b27',
    900: '#2D2520',
  },
};

const fonts = {
  heading: `'Cormorant Garamond', 'Georgia', serif`,
  body: `'Jost', 'Helvetica Neue', sans-serif`,
  mono: `'JetBrains Mono', monospace`,
};

const styles = {
  global: {
    'html, body': {
      bg: 'warm.50',
      color: 'warm.900',
      scrollBehavior: 'smooth',
      WebkitFontSmoothing: 'antialiased',
    },
    '::selection': {
      background: 'warm.300',
      color: 'warm.900',
    },
    '*': {
      borderColor: 'warm.100',
    },
  },
};

const components = {
  Button: {
    baseStyle: {
      fontFamily: 'body',
      fontWeight: '400',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      borderRadius: '0',
      _focus: {
        boxShadow: `0 0 0 3px #A27B5966`,
      },
    },
    variants: {
      brand: {
        bg: 'warm.400',
        color: 'white',
        _hover: {
          bg: 'warm.500',
          transform: 'translateY(-2px)',
          boxShadow: '0 8px 24px rgba(162,123,89,0.35)',
        },
        _active: { bg: 'warm.500', transform: 'translateY(0)' },
        transition: 'all 0.25s ease',
      },
      brandOutline: {
        bg: 'transparent',
        color: 'warm.400',
        border: '1px solid',
        borderColor: 'warm.400',
        _hover: {
          bg: 'warm.400',
          color: 'white',
          transform: 'translateY(-2px)',
          boxShadow: '0 8px 24px rgba(162,123,89,0.25)',
        },
        _active: { bg: 'warm.500', color: 'white', transform: 'translateY(0)' },
        transition: 'all 0.25s ease',
      },
      ghost: {
        color: 'warm.400',
        _hover: { bg: 'warm.100' },
      },
    },
    defaultProps: {
      variant: 'brand',
    },
  },
  Heading: {
    baseStyle: {
      fontFamily: 'heading',
      fontWeight: '400',
      color: 'warm.900',
      lineHeight: '1.15',
    },
  },
  Text: {
    baseStyle: {
      fontFamily: 'body',
      color: 'warm.900',
      lineHeight: '1.8',
    },
  },
  Link: {
    baseStyle: {
      color: 'warm.400',
      _hover: { textDecoration: 'none', color: 'warm.500' },
      transition: 'color 0.2s',
    },
  },
  Input: {
    variants: {
      filled: {
        field: {
          bg: 'white',
          border: '1px solid',
          borderColor: 'warm.100',
          borderRadius: '0',
          fontFamily: 'body',
          _hover: { borderColor: 'warm.300' },
          _focus: { borderColor: 'warm.400', bg: 'white' },
        },
      },
    },
    defaultProps: { variant: 'filled' },
  },
  Textarea: {
    variants: {
      filled: {
        bg: 'white',
        border: '1px solid',
        borderColor: 'warm.100',
        borderRadius: '0',
        fontFamily: 'body',
        _hover: { borderColor: 'warm.300' },
        _focus: { borderColor: 'warm.400', bg: 'white' },
      },
    },
    defaultProps: { variant: 'filled' },
  },
  Divider: {
    baseStyle: {
      borderColor: 'warm.100',
      opacity: 1,
    },
  },
};

const theme = extendTheme({
  config,
  colors,
  fonts,
  styles,
  components,
  space: {
    section: '6rem',
    sectionSm: '3rem',
  },
});

export default theme;
