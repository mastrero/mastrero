import styled, { createGlobalStyle } from 'styled-components';

export const MediaQueryMobile = content => `@media screen and (max-width: 768px) { ${content} }`;
export const MediaQueryDesktop = content => `@media screen and (min-width: 768px) { ${content} }`;

export const GlobalStyle = createGlobalStyle`
  *,
  html,
  body {
    -webkit-tap-highlight-color: transparent;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  }

  html {
    --typed-font: #65b4f0;
    --about-bg: #ffee97;
    --white: #ffffff;
    --black: #000000;
    --pink: #ff5f5f;
    --purple: #BD5FFF;
    --teal: #79d6b5;
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
  }

  #gatsby-focus-wrapper {
    display: flex;
    height: 100vh;
  }
`;

export const Main = styled.main`
  width: 100%;
  overflow-y: scroll;
  scroll-behavior: smooth;
  transition: all 0.3s linear;
`;

export const Section = styled.section`
  min-height: 100%;
  background-color: var(--white);
  position: relative;
  ${() => MediaQueryMobile('margin-left: 35px;')}
`;
