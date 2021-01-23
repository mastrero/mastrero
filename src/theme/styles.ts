import { colors } from './colors';

export const styles = {
  global: (props: any) => ({
    body: {
      color: props.colorMode === 'light' ? colors.dark : colors.white,
      bg: props.colorMode === 'light' ? colors.white : colors.dark,
      fontFamily: `'Public Sans', -apple-system,"Segoe UI", sans-serif`,
      position: 'relative',
      overflowX: 'hidden',
    },
    '*, ::before, ::after': {
      WebkitFontSmoothing: 'antialiased',
      MsOverflowStyle: 'none',
      scrollbarWidth: 'none',
    },
    '.custom-scroll::-webkit-scrollbar': {
      width: '1px',
      height: '6px',
      backgroundColor: props.colorMode === 'light' ? colors['grey.21'] : colors['grey.11'],
    },
    '.custom-scroll::-webkit-scrollbar-thumb': {
      borderRadius: '10px',
      backgroundColor: props.colorMode === 'light' ? colors['grey.22'] : colors['grey.12'],
      border: `2px solid ${props.colorMode === 'light' ? colors['grey.21'] : colors['grey.11']}`,
    },
    'a:focus, button:focus': {
      boxShadow: '0 0 0 2px rgb(32 62 212 / 60%) !important',
    },
    'a:focus-visible, button:focus-visible': {
      boxShadow: '0 0 0 2px rgb(32 62 212 / 60%)',
    },
    'a:focus:not(:focus-visible), button:focus:not(:focus-visible)': {
      outline: 'none !important',
      boxShadow: 'none !important',
    },
    '.Individual__Post a:hover .highlight': {
      color: colors['secondary'],
    },
    'input:focus, textarea:focus': {
      borderColor: `${colors['secondary']} !important`,
      boxShadow: `0 0 0 1px ${colors['secondary']} !important`,
    },
  }),
};
