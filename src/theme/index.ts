import { extendTheme, theme as t } from '@chakra-ui/react';
import { colors } from './colors';
import { styles } from './styles';
import { components } from './components';

export const theme = extendTheme({
  colors: {
    ...t.colors,
    ...colors,
  },
  styles,
  components,
  config: {
    // useSystemColorMode: true,
  },
});
