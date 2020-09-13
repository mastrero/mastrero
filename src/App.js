import React, { useRef, Suspense } from "react";
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
			<Suspense fallback={""}>
				<Components.Sidebar toggleTheme={toggleTheme} mainRef={mainRef} />
			</Suspense>
			<Main ref={mainRef}>
				<Sections />
			</Main>
		</ThemeProvider>
	);
}

const Sections = () => {
	return links.map((link) => {
		let Component = Components[link]();
		return (
			<Section id={link} key={link}>
				{Component}
			</Section>
		);
	});
};
