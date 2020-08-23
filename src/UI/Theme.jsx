import { useState } from "react";

const lightTheme = {
	type: "light",
	font: "#000000",
	bg: "#ffffff",
};
const darkTheme = {
	text: "dark",
	font: "#ffffff",
	bg: "#2f2f2f",
};

const useTheme = () => {
	const [theme, setTheme] = useState(lightTheme);

	const toggleTheme = () => {
		setTheme(theme.type === "light" ? darkTheme : lightTheme);
	};

	return [theme, toggleTheme];
};

export default useTheme;
