import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  html,
  body {
    -webkit-tap-highlight-color: transparent;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, 'Noto Sans', sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  }

  body {
    margin: 0;
    padding: 0;
    height: 100%;
    box-sizing: border-box;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    user-select: none;
    animation: animateBg 0.5s ease;
    animation-iteration-count: 1;
      background-color: ${props => props.theme.colors.bg};
  }

  @keyframes animateBg {
    from { background-color: #ffffff; }
    to { background-color: ${props => props.theme.colors.bg}; }
  }

  #gatsby-focus-wrapper {
    height: 100vh;
    display: flex;
    background-color: transparent;
  }
`;

export const theme = {
  colors: {
    bg: `#1b1b1b`,
    font: `#ffffff`,
    yellow: `#ffee97`,
    red: ` #ff5f5f`,
  },
  bp: {
    mb: css => `@media only screen and (max-width: 768px) {${css}}`,
    lg: css => `@media only screen and (min-width: 769px) {${css}}`,
  },
};
