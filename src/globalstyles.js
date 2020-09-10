import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, html, body {
    font-family: "Segoe UI", "Helvetica", sans-serif;  
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
  }

  #root {
    display: flex;
    height: 100vh;
  }
`;

export const Section = styled.section`
	min-height: 100%;
	background-color: ${(props) => props.theme.bg};
	transition: all 0.3s linear;
	position: relative;
	border-bottom: 2px solid black;
	@media screen and (max-width: 768px) {
		margin-left: 40px;
		:first-child {
			height: ${() => window.innerHeight}px;
		}
	}
`;

export const Main = styled.main`
	width: 100%;
	overflow-y: scroll;
	scroll-behavior: smooth;
	transition: all 0.3s linear;
`;
