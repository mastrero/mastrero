import { extendTheme } from '@chakra-ui/react';

const colors = {
  brand: {
    bg: '#ffffff',
    font: '#000000',
  },
};

export default extendTheme({
  colors,
  styles: {
    global: {
      body: {
        bg: colors.brand.bg,
        color: colors.brand.font,
        h: '100vh',
      },
      '#__next': {
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridTemplateRows: '60px 1fr',
        h: '100%',
      },
      'a, button': {
        cursor: 'pointer',
      },
      'button:focus-visible': {
        outline: '2px dashed #000000 !important',
        boxShadow: 'none !important',
      },
      'button:focus:not(:focus-visible)': {
        boxShadow: '0 0 0 2px #000000 !important',
      },
      '.plain-btn-hover': {
        _hover: {
          bg: 'transparent !important',
        },
      },
      '.remove-tap-highlight': {
        WebkitTapHighlightColor: 'transparent !important',
      },
    },
  },
  components: {
    Button: {
      variants: {
        'self-outline': {
          border: '1px solid var(--chakra-colors-brand-primary)',
        },
      },
    },
  },
});
