import { useContext } from "react";

import DarkModeSharpIcon from "@mui/icons-material/DarkModeSharp";
import LightModeSharpIcon from "@mui/icons-material/LightModeSharp";
import { IconButton } from "@mui/material";

import NavContext from "@/context/NavContext";
import ThemeContext from "@/context/ThemeContext";

const ThemeToggle = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);
	// console.log(theme);

	const { isMobileView } = useContext(NavContext);

	return (
		<IconButton
			className="mode-btn"
			onClick={toggleTheme}
			sx={{
				padding: "0",
				position: isMobileView ? "absolute" : "none",
				bottom: isMobileView ? "1%" : "none",
				right: isMobileView ? "2%" : "none",
			}}
		>
			{theme === "light" ? (
				<DarkModeSharpIcon className="mode-icon" sx={{ color: "#000", fontSize: "2rem" }} />
			) : (
				<LightModeSharpIcon className="mode-icon" sx={{ color: "#fff", fontSize: "2rem" }} />
			)}
		</IconButton>
	);
};

export default ThemeToggle;
