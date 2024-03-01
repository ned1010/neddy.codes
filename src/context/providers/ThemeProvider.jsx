import ThemeContext from "../ThemeContext";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function ThemeProvider({ children }) {
	const [theme, setTheme] = useState("light");

	//toggle and save the theme to the local state
	const toggleTheme = () => {
		setTheme((prevTheme) => {
			const newTheme = prevTheme === "light" ? "dark" : "light";
			localStorage.setItem("theme", newTheme);
			return newTheme;
		});
	};

	//get the theme from the locally stored state
	const getTheme = () => {
		const savedTheme = localStorage.getItem("theme");
		if (savedTheme) {
			setTheme(savedTheme);
		}
	};

	//darkdmode is for the whold body
	useEffect(() => {
		getTheme();
		document.body.setAttribute("data-theme", theme);
	}, [theme]);

	return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export default ThemeProvider;

ThemeProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
