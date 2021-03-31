import { colors } from './colors';

export const styles = {
  global: ({ colorMode }: any) => ({
    ':root': {
      '--current-theme': colorMode,
      '--font': colorMode === 'light' ? colors.dark : colors.white,
      '--font-reverse': colorMode === 'light' ? colors.white : colors.dark,
      '--focus-font': colorMode === 'light' ? colors['secondary'] : colors['primary'],
      '--bg': colorMode === 'light' ? colors.white : colors.dark,
      '--border-color': colorMode === 'light' ? '#e2e8f0' : '#464646',
      '--scrollbar-bg': colorMode === 'light' ? '#eff1f5' : '#2b333b',
      '--scrollbar-tb': colorMode === 'light' ? '#5a6072' : '#9ca8b4',
      '--focusable': colorMode === 'light' ? '#203ed499' : '#4299e199',
      '--hightlight': colorMode === 'light' ? '#001684' : '#99a1ff',
      '--btn-bg': colorMode === 'light' ? colors['secondary'] : colors['primary'],
    },
    body: {
      color: 'var(--font)',
      bg: 'var(--bg)',
      fontFamily: `'Public Sans', -apple-system, 'Segoe UI', sans-serif`,
      position: 'relative',
      overflowX: 'hidden',
      transition: 'background 0.35s ease-',
    },
    '.Font__Raleway': {
      fontFamily: `Raleway, 'Segoe UI', sans-serif`,
    },
    '*, *::before, *::after': {
      WebkitFontSmoothing: 'antialiased',
      MsOverflowStyle: 'none',
      scrollbarWidth: 'none',
      borderColor: 'var(--border-color)',
    },
    '.custom-scroll::-webkit-scrollbar': {
      width: '1px',
      height: '6px',
      backgroundColor: 'var(--scrollbar-bg)',
    },
    '.custom-scroll::-webkit-scrollbar-tb': {
      borderRadius: '10px',
      backgroundColor: 'var(--scrollbar-tb)',
      border: '2px solid var(--scrollbar-bg)',
    },
    'a:focus, button:focus, a:focus-visible, button:focus-visible': {
      boxShadow: '0 0 0 2px var(--focusable) !important',
    },
    'a:focus:not(:focus-visible), button:focus:not(:focus-visible)': {
      outline: 'none !important',
      boxShadow: 'none !important',
    },
    '.Themable__Button': {
      bg: 'var(--btn-bg) !important',
      color: 'var(--font-reverse) !important',
    },
    '.Individual__Post a:hover .highlight': {
      color: 'var(--focus-font)',
      opacity: 1,
    },
    'input:focus, textarea:focus': {
      borderColor: 'var(--btn-bg) !important',
      boxShadow: 'var(--btn-bg) !important',
    },
  }),
};
