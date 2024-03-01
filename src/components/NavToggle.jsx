import React, { useContext } from "react";
import NavContext from "@/context/NavContext";
import ThemeContext from "@/context/ThemeContext";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function NavToggle() {
	const { theme } = useContext(ThemeContext);
	const { isVisible, toggleVisible } = useContext(NavContext);

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
					zIndex: "9999",
					color: theme === "light" ? "#000" : "#fff",
				}}
			>
				{isVisible ? <CloseIcon /> : <MenuIcon className="menu-icon" />}
			</IconButton>
		</>
	);
}

export default NavToggle;
