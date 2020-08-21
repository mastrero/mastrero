import React from "react";

import useTheme from "./UI/Theme";
import { ThemeProvider } from "styled-components";
import Sidebar from "./Components/Sidebar";
import { About } from "./Components/Main";

function App() {
	const [theme, toggleTheme] = useTheme();

	return (
		<ThemeProvider theme={theme}>
			<div className='view'>
				<Sidebar toggleTheme={toggleTheme} />
				<main>
					<About />
					<section id='work'>Work</section>
					<section id='contact'>Contact</section>
					<section id='resume'>Resume</section>
				</main>
			</div>
		</ThemeProvider>
	);
}

export default App;
