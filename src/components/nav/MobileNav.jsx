import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import ThemeContext from "@/context/ThemeContext";
import NavContext from "@/context/NavContext";

import ThemeToggle from "@/components/ThemeToggle";

function MobileNav() {
	const { theme } = useContext(ThemeContext);
	const { toggleVisible } = useContext(NavContext);

	const iconStyle = {
		fontSize: "2rem",
		color: theme === "light" ? "#000" : "#fff",
		textDecoration: "none",
	};

	return (
		<Box
			sx={{
				position: "fixed",
				top: "0%",
				right: "0%",
				width: "50%",
				height: "100%",
				backgroundColor: theme === "light" ? "#fff" : "#000",
				boxShadow: "0px 10px 20px 0px rgba(0,0,0,0.2)",
				zIndex: "999",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
				gap: "1.5rem",
			}}
			className="menu-open"
		>
			<NavLink className="nav-link" to="/" onClick={toggleVisible} style={iconStyle}>
				<Box>
					<HomeOutlinedIcon /> <Typography variant="p">Home</Typography>
				</Box>
			</NavLink>
			<NavLink className="nav-link" to="/about" onClick={toggleVisible} style={iconStyle}>
				<Box>
					<PersonOutlineIcon /> <Typography variant="p">About</Typography>
				</Box>
			</NavLink>
			<NavLink className="nav-link" to="/work" onClick={toggleVisible} style={iconStyle}>
				<Box>
					<WorkOutlineOutlinedIcon /> <Typography variant="p">Work</Typography>
				</Box>
			</NavLink>
			<NavLink className="nav-link" to="/resume" onClick={toggleVisible} style={iconStyle}>
				<Box>
					<DescriptionOutlinedIcon /> <Typography variant="p">Resume</Typography>
				</Box>
			</NavLink>
			<ThemeToggle />
		</Box>
	);
}

export default MobileNav;
