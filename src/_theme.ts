import { color, extendTheme } from '@chakra-ui/react';

const colors = {
  'grey.11': '#2b333b',
  'grey.12': '#9ca8b4',
  'grey.21': '#eff1f5',
  'grey.22': '#5a6072',
  white: '#ffffff',
  dark: '#0e141b',
  primary: '#ff0a78',
  secondary: '#4a67f7',
  ternary: '#ffe100',
  'hero.light': '#bfdef2',
};

export const theme = extendTheme({
  colors,
  styles: {
    global: props => ({
      body: {
        color: props.colorMode === 'light' ? colors.dark : colors.white,
        bg: props.colorMode === 'light' ? colors.white : colors.dark,
        fontFamily: `'Ruda', -apple-system,"Segoe UI", sans-serif`,
        overflow: 'hidden',
      },
      '*, ::before, ::after': {
        WebkitFontSmoothing: 'antialiased',
        MsOverflowStyle: 'none',
        scrollbarWidth: 'none',
      },
      '*::-webkit-scrollbar': {
        width: '10px',
        backgroundColor: props.colorMode === 'light' ? colors['grey.21'] : colors['grey.11'],
      },
      '*::-webkit-scrollbar-thumb': {
        borderRadius: '10px',
        backgroundColor: props.colorMode === 'light' ? colors['grey.22'] : colors['grey.12'],
        border: `2px solid ${props.colorMode === 'light' ? colors['grey.21'] : colors['grey.11']}`,
      },
    }),
  },
  components: {
    Button: {
      variants: {
        'nav-link': {
          h: 'auto',
          px: '0',
          m: '0.5rem 0',
          borderRadius: 0,
          fontSize: '1.1rem',
          minW: 'unset',
          justifyContent: 'flex-start',
          position: 'relative',
          _before: {
            content: '""',
            position: 'absolute',
            left: '-22px',
            borderTop: '8px solid transparent',
            borderBottom: '8px solid transparent',
            borderLeft: `0px solid ${colors.primary}`,
            transition: 'border 0.35s cubic-bezier(0.39, 0.58, 0.57, 1)',
          },
          span: {
            mr: '0rem',
          },
          _focus: {
            boxShadow: 'none',
            color: colors.primary,
            _before: {
              borderLeftWidth: 10,
            },
          },
          _hover: {
            color: colors.primary,
            _before: {
              borderLeftWidth: 10,
            },
          },
        },
        'icon-link': {
          px: 0,
          cursor: 'pointer',
          _focus: {
            boxShadow: '0 0 0 1px rgba(66, 153, 225, 0.6)',
          },
          _hover: {},
        },
      },
    },
  },
  config: {
    useSystemColorMode: true,
  },
});
