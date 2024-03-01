import React, { useContext } from "react";
import NavContext from "../context/NavContext";
import ThemeContext from "../context/ThemeContext";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function NavToggle() {
	const { theme } = useContext(ThemeContext);
	const { toggleVisible } = useContext(NavContext);

	return (
		<>
			<IconButton
				onClick={toggleVisible}
				sx={{
					borderRadius: "1rem",
					padding: "0.5rem",
					"@media (min-width:768px)": {
						display: "none",
					},
					color: theme === "light" ? "#000" : "#fff",
				}}
			>
				<MenuIcon className="menu-icon" />
			</IconButton>
		</>
	);
}

export default NavToggle;
