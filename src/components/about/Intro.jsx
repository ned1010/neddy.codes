import { Box, Typography, Link } from "@mui/material";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import { useContext } from "react";
import ThemeContext from "@/context/ThemeContext";
import whiteSmileyGIF from "@/assets/smile.gif";
import darkSmileyGIF from "@/assets/dark.gif";

function Intro() {
    const {theme} = useContext(ThemeContext);
  return (
    <Box
				sx={{
					padding: "0 2rem",
					paddingBottom: "7rem",
					borderBottom: theme === "light" ? "2px solid rgba(199, 200, 204, 0.8)" : "2px solid rgba(180, 180, 184, 0.5)",
					"@media (max-width:768px)": {
						padding: "0 2rem",
						paddingBottom: "3rem"
					},
				}}
			>
				<Typography
					variant="h1"
					sx={{
						fontSize: "5rem",
						fontWeight: "700",
						"@media (max-width:768px)": {
							fontSize: "3rem",
						},
					}}
				>
					{theme === "light" ? (
						<img className="about__intro__img" src={whiteSmileyGIF} alt="Animated smiley icon" />
					) : (
						<img className="about__intro__img" src={darkSmileyGIF} alt="Animated smiley icon" />
					)}
					Hi, I am <span className="about__name">Ned Dorji</span>
				</Typography>
				<Typography
					variant="h3"
					sx={{
						lineHeight: "6rem",
						fontWeight: "400",
						fontSize: "4rem",
						margin: "4rem 0",
						"@media (max-width: 768px)": {
							fontSize: "2rem",
							lineHeight: "3rem",
							margin: "3rem 0",
						},
					}}
				>
					A budding software engineer and artificial intelligence enthusiasts solving everyday
					challenges with creative and approachable solutions.
				</Typography>
				<Box sx={{}}>
					<Typography sx={{ display: "inline", fontSize: "1.25rem" }}>
						Currently studying
					</Typography>
					<Typography
						sx={{
							display: "inline",
							margin: "0 4px",
							fontFamily: "Protest Revolution",
							fontStyle: "italic",
							fontSize: "1.25rem",
							cursor: "pointer",
						}}
					>
						<Link
							href="https://www.curtin.edu.au/about/learning-teaching/science-engineering/school-of-electrical-engineering-computing-and-mathematical-sciences/"
							target="_blank"
							sx={{ color: theme == "light" ? "#B4B4B8" : "#EEEDEB", textDecoration: "none" }}
						>
							Computer Science & AI <NorthEastIcon sx={{}} />
						</Link>
					</Typography>
					<Typography sx={{ display: "inline", fontSize: "1.25rem", }}>
						at Curtin University.
					</Typography>
				</Box>
			</Box>
  )
}

export default Intro;