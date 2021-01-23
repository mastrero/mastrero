export const components = {
  Button: {
    variants: {
      'nav-tab': {
        p: '0.5rem 1rem',
        minW: 'unset',
        fontSize: '14px',
        h: '100%',
        fontWeight: '700',
        borderRadius: 'none',
        _hover: {
          textDecor: 'none',
        },
        _active: {
          bg: 'none',
        },
        '&[aria-selected=true], &[data-selected=true]': {
          color: 'var(--btn-bg)!important',
        },
      },
    },
  },
};
