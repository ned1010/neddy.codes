import { Typography, ImageListItem, Box, Button } from "@mui/material";
import { useContext } from "react";
import { Slide } from "react-awesome-reveal";
import HotTyper from "react-hot-typer";

import { Link } from "react-router-dom";
import NavContext from "@/context/NavContext";

import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

const Main = () => {
	const { isMobileView } = useContext(NavContext);
	console.log(isMobileView);
	return (
		<Box
			className="home__container"
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
				height: isMobileView ? "auto" : "100vh",
				width: "100%",
				maxWidth: "1200px",
				margin: "0 auto",
			}}
		>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-evenly",
					alignItems: "center",
					flexWrap: "nowrap",
					gap: "3rem",
					marginTop: "7rem",
					textAlign: "center",
					"@media (max-width: 767px)": {
						display: "flex",
						flexDirection: "column-reverse",
						alignItems: "center",
						gap: "2rem",
						padding: "0 0.25rem",
					},
				}}
			>
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						flexDirection: "column",
						width: "18rem",
						gap: "1rem",
						padding: "2rem",
					}}
				>
					<Slide direction="down" duration={2000}>
						<Typography
							variant="h2"
							sx={{
								fontWeight: "700",
								textShadow: "2px 2px",
								fontSize: "6rem",
								fontFamily: "Protest Revolution",
							}}
						>
							Hello!
						</Typography>
						<Typography
							variant="h4"
							sx={{
								fontFamily: "Roboto, sans-serif",
								textShadow: "1px 1px",
								fontSize: "4rem",
								"@media (max-width: 767px)": {
									fontSize: "3rem",
								},
							}}
						>
							I am Ned
						</Typography>
					</Slide>

					<HotTyper
						text={[
							"I'm a Full Stack Developer",
							"A Software Engineer",
							"A musician",
							"A Budding AI Researcher",
						]}
						speed={300}
						style={{ fontFamily: "Roboto, sans-serif", fontSize: "2rem", margin: "0.5rem auto" }}
					/>

					<Button
						variant="contained"
						sx={{ borderRadius: "10px", fontFamily: "Roboto, sans-serif" }}
					>
						<Link
							to={"https://www.instagram.com/nedofalltrades/"}
							target="_blank"
							style={{
								textDecoration: "none",
								fontFamily: "Roboto, sans-serif",
								color: "#fff",
								padding: "0.25rem",
							}}
						>
							Let's Connect
						</Link>
					</Button>
				</Box>

				<ImageListItem
					sx={{
						width: "22rem",
						"@media (max-width: 480px)": {
							width: "15rem",
						},
					}}
				>
					<img src="src/assets/profile.JPG" className="home-image" />
				</ImageListItem>
			</Box>

			{/* Make sure to include onClick event to handle to move it */}
			<DoubleArrowIcon
				className="downward__icon"
				sx={{
					fontSize: "4rem",
					marginTop: "5rem",
					"@media (max-width: 767px)": {
						marginTop: "1rem",
					},
				}}
			/>
		</Box>
	);
};

export default Main;
