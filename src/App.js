import React, { useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import * as Components from "./Components";
import useTheme from "./UI/Theme";
import { links } from "./utils";

const Section = styled.section`
	min-height: 100%;
	background-color: ${(props) => props.theme.bg};
	transition: all 0.3s linear;
	position: relative;
	@media screen and (max-width: 768px) {
		padding-left: 40px;
		:first-child {
			height: ${() => window.innerHeight}px;
		}
	}
`;

const Main = styled.main`
	width: 100%;
	overflow-y: scroll;
	scroll-behavior: smooth;
	transition: all 0.3s linear;
`;

function App() {
	const [theme, toggleTheme] = useTheme();
	const mainRef = useRef(null);

	return (
		<ThemeProvider theme={theme}>
			<Components.Sidebar toggleTheme={toggleTheme} mainRef={mainRef} />
			<Main ref={mainRef}>
				{links.map((link, index) => (
					<Section id={link} key={link + index}>
						{Components[link]()}
					</Section>
				))}
			</Main>
		</ThemeProvider>
	);
}

export default App;
