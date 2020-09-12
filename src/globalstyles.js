import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, html, body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  }

  body {
    margin: 0;
    padding: 0;
    height: 100%;
    box-sizing: border-box;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;

    /* GLOBALS */
    --typed-font : #65b4f0;
    --about-bg: #ffee97;
  }

  #root {
    display: flex;
    height: 100vh;
  }
`;

export const Section = styled.section`
	min-height: 100%;
	background-color: ${(props) => props.theme.bg};
	position: relative;
	border-bottom: 1px solid black;
	@media screen and (max-width: 768px) {
		margin-left: 35px;
	}
`;

export const Main = styled.main`
	width: 100%;
	overflow-y: scroll;
	scroll-behavior: smooth;
	transition: all 0.3s linear;
`;
