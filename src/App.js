import React, { useRef } from "react";
import { ThemeProvider } from "styled-components";
import Components from "./Components";
import useTheme from "./UI/Theme";
import ScrollToTop from "./UI/ScrollToTop";
import { links } from "./utils";
import { Main, Section } from "./globalstyles";

export default function App() {
	const [theme, toggleTheme] = useTheme();
	const mainRef = useRef(null);

	return (
		<ThemeProvider theme={theme}>
			<Components.Sidebar toggleTheme={toggleTheme} mainRef={mainRef} />
			<ScrollToTop mainRef={mainRef} />
			<Main ref={mainRef}>
				<Sections />
			</Main>
		</ThemeProvider>
	);
}

const Sections = () => {
	return links.map((link) => {
		let Component = Components[link];
		return (
			<Section id={link} key={link}>
				<Component />
			</Section>
		);
	});
};
