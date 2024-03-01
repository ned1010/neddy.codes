import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import ThemeContext from "../../context/ThemeContext";

function Footer() {
	const year = new Date().getFullYear();

	const { theme } = useContext(ThemeContext);

	const linkStyle = {
		color: theme === "light" ? "#000" : "#fff",
	};

	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "space-between",
				marginTop: "2rem",
				borderTop:
					theme === "light"
						? "2px solid rgba(199, 200, 204, 0.8)"
						: "2px solid rgba(180, 180, 184, 0.5)",
				padding: "5rem 2rem",
				maxWidth: "1200px",
				fontFamily: "Roboto, sans-serif",
				margin: "0 auto",
				"@media (max-width: 768px)": {
					display: "flex",
					flexDirection: "column",
					gap: "2rem",
					padding: "2rem 1rem",
				},
			}}
		>
			<Box
				sx={{
					"@media (max-width: 768px)": {
						padding: "0 1rem",
					},
				}}
			>
				<Typography variant="h4" sx={{ fontStyle: "italic", fontWeight: "800" }}>
					Let's create wonderful products <span className="footer__focus">together!</span>
				</Typography>
				<Box
					sx={{
						display: "flex",
						justifyContent: "flex-start",
						gap: "5rem",
						marginTop: "1rem",
						"@media (max-width: 767px)": {
							display: "flex",
							flexDirection: "column",
							gap: "2rem",
							padding: "1rem 0",
						},
					}}
				>
					<Box sx={{ display: "flex", flexDirection: "column", fontSize: "1.5rem" }}>
						<Typography
							variant="h4"
							sx={{
								fontSize: "2rem",
								color: theme == "light" ? "#B4B4B8" : "#EEEDEB",
								marginBottom: "1rem",
								"@media (max-width: 767px)": {
									marginBottom: "0",
								},
							}}
						>
							Connect
						</Typography>
						<Link
							className="footer__link"
							to={"mailto:ned161803@gmail.com"}
							target="_blank"
							rel="noreferrer"
							style={linkStyle}
						>
							Email <NorthEastIcon />
						</Link>

						<Link
							className="footer__link"
							to={"https://www.linkedin.com/in/ned10/"}
							target="_blank"
							style={linkStyle}
						>
							LinkedIn <NorthEastIcon />
						</Link>
						<Link
							className="footer__link"
							to={"https://drive.google.com/file/d/1uy59P4Shhy2h90cqPB-J2JdyNPZtDpIX/view"}
							target="_blank"
							style={linkStyle}
						>
							ReadCV <NorthEastIcon />
						</Link>
					</Box>

					<Box sx={{ display: "flex", flexDirection: "column", fontSize: "1.5rem" }}>
						<Typography
							variant="h4"
							sx={{
								fontSize: "2rem",
								color: theme == "light" ? "#B4B4B8" : "#EEEDEB",
								marginBottom: "1rem",
								"@media (max-width: 768px)": {
									marginBottom: "0",
								},
							}}
						>
							Navigate
						</Typography>
						<Box sx={{ display: "flex", flexDirection: "column" }}>
							<Link className="footer__link" to={"/about"} style={linkStyle}>
								About
							</Link>
							<Link className="footer__link" to={"/work"} style={linkStyle}>
								Work
							</Link>
							<Link
								className="footer__link"
								to={"https://drive.google.com/file/d/1uy59P4Shhy2h90cqPB-J2JdyNPZtDpIX/view"}
								target="_blank"
								style={linkStyle}
							>
								Resume
							</Link>
						</Box>
					</Box>
				</Box>
			</Box>

			<Box
				sx={{
					"@media (max-width: 768px)": {
						padding: "0 1rem",
					},
				}}
			>
				<Typography
					variant="h4"
					sx={{
						fontStyle: "italic",
						fontWeight: "800",
						fontSize: "2rem",
						"@media (max-width:768px)": {
							fontSize: "1.5rem",
						},
					}}
				>
					Made with Love &copy; {year} Ned
				</Typography>
				<Typography
					variant="h6"
					sx={{
						color: theme == "light" ? "#B4B4B8" : "#EEEDEB",
					}}
				>
					Powered by cappuccino & latte
				</Typography>
			</Box>
		</Box>
	);
}

export default Footer;
