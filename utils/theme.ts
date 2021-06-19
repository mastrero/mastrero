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
      },
      'a, button': {
        cursor: 'pointer',
      },
      'button:focus-visible': {
        outline: '2px dashed rgb(240 72 72 / 77%) !important',
        boxShadow: 'none !important',
      },
      'button:focus:not(:focus-visible)': {
        boxShadow: '0 0 0 3px rgba(240, 72, 72, 0.6) !important',
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
