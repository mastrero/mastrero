import { extendTheme } from '@chakra-ui/react';

const colors = {
  brand: {
    bg: '#ffffff',
    font: '#000000',
    primary: '#2940D3',
  },
};

const fonts = {
  OpenSans: 'Open Sans',
  monospace: 'monospace',
};

export default extendTheme({
  colors,
  fonts,
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
      'button:focus-visible, a:focus-visible': {
        outline: '2px dashed #000000 !important',
        boxShadow: 'none !important',
      },
      'button:focus:not(:focus-visible), a:focus:not(:focus-visible)': {
        boxShadow: 'none !important',
      },
      '.plain-btn-hover': {
        _hover: {
          bg: 'transparent !important',
        },
      },
      '::-webkit-scrollbar': {
        width: '8px',
      },
      '::-webkit-scrollbar-thumb': {
        background: '#2940D3',
        borderRadius: '10px 0 0 0',
      },
      '::-webkit-scrollbar-track': {
        bg: '#a2a2a2',
        borderRadius: '10px 0 0 0',
      },
      '.remove-tap-highlight': {
        WebkitTapHighlightColor: 'transparent !important',
      },
      '.font-mono': {
        fontFamily: 'monospace, sans-serif',
      },
      '.font-OpenSans': {
        fontFamily: '"Open Sans", sans-serif',
      },
    },
  },
  components: {
    Text: {
      variants: {
        hightlight: {
          color: colors.brand.primary,
          fontWeight: 600,
        },
      },
    },
    Link: {
      variants: {
        hashtag: {
          color: colors.brand.primary,
          fontWeight: 600,
          pr: '5px',
        },
      },
    },
  },
});
