import React, { useRef } from "react";
import { ThemeProvider } from "styled-components";
import * as Components from "./Components";
import useTheme from "./UI/Theme";
import { links } from "./utils";
import { Main, Section } from "./globalstyles";

export default function App() {
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
