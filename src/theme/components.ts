import { colors } from './colors';

export const components = {
  Button: {
    variants: {
      'nav-tab': {
        p: '0.5rem 1rem',
        minW: 'unset',
        fontSize: '14px',
        fontWeight: '600',
        borderRadius: 'none',
        color: '#000000',
        _hover: {
          textDecor: 'none',
        },
        _focus: {
          boxShadow: '0 0 0 0px rgb(32 62 212 / 60%)',
        },
        _active: {
          bg: 'none',
        },
        '&[aria-selected=true], &[data-selected=true]': {
          color: `${colors['secondary']} !important`,
        },
      },
    },
  },
};
