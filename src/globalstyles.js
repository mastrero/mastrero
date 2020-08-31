import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: "Segoe UI", "Helvetica", sans-serif;
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

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    cursor: pointer;
  }
  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 25px 0 0 25px;
    margin: 15px 0;
  }
  ::-webkit-scrollbar-thumb {
    background: #000000;
    border-radius: 25px 0 0 25px;
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
