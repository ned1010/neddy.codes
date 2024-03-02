import { useContext } from "react";
import { Box, Link, Typography } from "@mui/material";
import { Instagram, YouTube, GitHub, Twitter } from "@mui/icons-material";
import ThemeContext from "@/context/ThemeContext";

function Social() {
	const { theme } = useContext(ThemeContext);

	return (
		<Box
			sx={{
				position: "fixed",
				top: "50%",
				left: "2rem",
				transform: "translate(-50%, -50%)",
				zIndex: "999",
				"@media (max-width:1200px)": {
					left: "1rem",
				},
			}}
		>
			<Typography
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					gap: "1rem",
				}}
			>
				<Link href="https://github.com/nidup1010" target="_blank">
					{" "}
					<GitHub
						className="social-icon"
						sx={{
							fontSize: "1.5rem",
							color: theme === "light" ? "#000" : "#fff",
							"&:hover": {
								color: "#007FFF",
							},
						}}
					/>
				</Link>
				<Link href="https://www.youtube.com/channel/UCMslECTvJJNIGH7H6q01xMw" target="_blank">
					{" "}
					<YouTube
						className="social-icon"
						sx={{
							fontSize: "1.5rem",
							color: theme === "light" ? "#000" : "#fff",
							"&:hover": {
								color: "#e52d27",
							},
						}}
					/>
				</Link>
				<Link href="https://www.instagram.com/nedofalltrades/" target="_blank">
					{" "}
					<Instagram
						className="social-icon"
						sx={{
							fontSize: "1.5rem",
							color: theme === "light" ? "#000" : "#fff",
							"&:hover": {
								color: "#E1306C",
							},
						}}
					/>
				</Link>

				<Link href="https://twitter.com/dorji_98" target="_blank">
					{" "}
					<Twitter
						className="social-icon"
						sx={{
							fontSize: "1.5rem",
							color: theme === "light" ? "#000" : "#fff",
							"&:hover": {
								color: "#1D9BF0",
							},
						}}
					/>
				</Link>
			</Typography>
		</Box>
	);
}

export default Social;
