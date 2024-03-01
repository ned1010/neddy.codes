import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import ThemeToggle from "../themeToggle";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

import ThemeContext from "../../context/ThemeContext";
import NavContext from "../../context/NavContext";

import MobileNav from "./MobileNav";
import NavToggle from "../NavToggle";

function Nav() {
	const { theme } = useContext(ThemeContext);
	const { isMobileView, isVisible } = useContext(NavContext);

	const [navBarColor, setNavBarColor] = useState("transparent");
	const [boxShadowColor, setBoxShadowColor] = useState(""); // Initialize boxShadowColor to an empty string

	const linkStyle = {
		textDecoration: "none",
	};

	const iconStyle = {
		fontSize: "3rem",
		color: theme === "light" ? "#000" : "#fff",
	};

	const boxContainerStyle = {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	};

	useEffect(() => {
		const navBarOpacity = () => {
			const scrollY = window.scrollY || window.pageYOffset;

			if (scrollY >= 10) {
				setNavBarColor(theme === "light" ? "#ddd" : "#2c2c2c");
				setBoxShadowColor(theme === "light" ? "rgba(0, 0, 0, 0.5)" : "rgba(255, 255, 255, 0.5)");
			} else {
				setNavBarColor(theme === "light" ? "transparent" : "initial");
				setBoxShadowColor(""); // Clear boxShadowColor if scrollY is less than 10
			}
		};

		navBarOpacity();

		document.addEventListener("scroll", navBarOpacity);

		return () => {
			document.removeEventListener("scroll", navBarOpacity);
		};
	}, [theme, isVisible]);

	return (
		<Box
			sx={{
				height: "7rem",
				position: "fixed",
				width: "100vw",
				zIndex: "99",
				backgroundColor: navBarColor,
				boxShadow: boxShadowColor ? `0px 1px 10px ${boxShadowColor}` : "none",
				transition: "background-color 1s",
			}}
		>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					height: "7rem",
					width: "100%",
					maxWidth: "1200px",
					margin: "0 auto",
					padding: "0 2rem",
				}}
			>
				<NavLink to={"/"} style={linkStyle}>
					<Typography
						variant="h3"
						sx={{
							color: theme === "light" ? "#000" : "#fff",
							fontFamily: "Protest Revolution",
							fontSize: "3rem",
						}}
					>
						ND
					</Typography>
				</NavLink>

				{isMobileView ? (
					<NavToggle />
				) : (
					<Box sx={{ display: "flex", gap: "3rem" }}>
						<NavLink className="home" to="/" style={linkStyle}>
							<Box sx={boxContainerStyle}>
								<HomeOutlinedIcon className="home-icon" sx={iconStyle} />
							</Box>
						</NavLink>
						<NavLink className="about" to="/about" style={linkStyle}>
							<Box sx={boxContainerStyle}>
								<PersonOutlineIcon className="about-icon" sx={iconStyle} />
							</Box>
						</NavLink>
						<NavLink className="work" to="/work" style={linkStyle}>
							<Box sx={boxContainerStyle}>
								<WorkOutlineOutlinedIcon className="work-icon" sx={iconStyle} />
							</Box>
						</NavLink>
						<NavLink
							className="resume"
							to={"https://drive.google.com/file/d/1uy59P4Shhy2h90cqPB-J2JdyNPZtDpIX/view"}
							target="_blank"
							style={linkStyle}
						>
							<Box sx={boxContainerStyle}>
								<DescriptionOutlinedIcon className="resume-icon" sx={iconStyle} />
							</Box>
						</NavLink>
						<ThemeToggle />
					</Box>
				)}
			</Box>
			{isVisible && isMobileView && <MobileNav />}
		</Box>
	);
}

export default Nav;
