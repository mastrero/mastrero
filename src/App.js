import React from "react";

import useTheme from "./UI/Theme";
import styled, { ThemeProvider } from "styled-components";
import Sidebar from "./Components/Sidebar";
import { About } from "./Components/Main";

function App() {
	const [theme, toggleTheme] = useTheme();

	const Main = styled.main`
		width: 100%;
		overflow-y: scroll;
		scroll-behavior: smooth;
		/* REMOVE LATER*/
		> section {
			height: 100%;
		}
	`;

	return (
		<ThemeProvider theme={theme}>
			<Sidebar toggleTheme={toggleTheme} />
			<Main>
				<About />
				<section id='work'>Work</section>
				<section id='contact'>Contact</section>
				<section id='resume'>Resume</section>
			</Main>
		</ThemeProvider>
	);
}

export default App;
