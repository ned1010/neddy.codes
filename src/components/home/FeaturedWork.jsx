import React, { useContext } from "react";
import featureWorks from "@/data/featuredWork";
import { Box, Typography } from "@mui/material";
// import { Link } from "react-router-dom";
import ThemeContext from "@/context/ThemeContext";
import { Link } from "react-router-dom";

function FeaturedWork() {
	const { theme } = useContext(ThemeContext);


	return (
		<Box
			sx={{
				width: "100%",
				maxWidth: "1200px",
				margin: "0 auto",
				padding: "0 2rem",
				fontFamily: "Roboto, sans-serif",
			}}
		>
			{/* <Typography variant="h4">Featured Work</Typography> */}

			{featureWorks.map((workItem, index) => {
				return (
					<Box
						key={workItem.id}
						sx={{
							display: "grid",
							gridTemplateColumns: "1fr 1fr",
							gap: "2rem",
							padding: "7rem 0",
							borderTop:
								theme === "light"
									? "2px solid rgba(199, 200, 204, 0.8)"
									: "2px solid rgba(180, 180, 184, 0.5)",
							"@media (max-width:768px)": {
								gridTemplateColumns: "1fr",
								gap: "2rem",
							},
						}}
					>
						<Box
							sx={{
								order: index % 2 == 0 && 1,
								"@media (max-width: 768px)": {
									order: { xs: 2 },
								},
							}}
						>
							<Typography
								variant="h4"
								sx={{
									fontSize: "3rem",
									fontWeight: "800",
									paddingBottom: "1rem",
									"@media (max-width: 768px)": {
										fontSize: "2.5rem",
									},
								}}
							>
								{workItem.companyName}
							</Typography>

							{/* make it a link to go the oldPerth website of the work section  */}
							<Typography
								variant="h5"
								sx={{
									fontSize: "2.5rem",
									marginBottom: "1rem",
									fontWeight: "600",
									"@media (max-width: 768px)": {
										fontSize: "2rem",
									},
								}}
							>
								<Link to={`/work/${workItem.id}`} className="work__link">
									{workItem.category}
								</Link>
							</Typography>
							<Typography
								variant="p"
								sx={{
									fontSize: "2rem",
									fontWeight: "300",
									"@media (max-width: 768px)": {
										fontSize: "1.5rem",
									},
								}}
							>
								{workItem.abstract}
							</Typography>
							<Typography
								sx={{
									fontSize: "1.5rem",
									marginTop: "1rem",
									color: theme == "light" ? "rgba(169, 169, 169, 0.9)" : "rgba(238, 237, 235, 0.8)",
									fontWeight: "500",
									textTransform: "uppercase",
									"@media (max-width: 768px)": {
										fontSize: "1.2rem",
									},
								}}
							>
								{workItem.field}
							</Typography>
						</Box>
						<Box>
							<Link target="_blank" to={workItem.projectLink} rel="noopener noreferrer">
								<img
									src={workItem.imgSource}
									alt="oldPerth website picture"
									className="featured__image"
								/>
							</Link>
						</Box>
					</Box>
				);
			})}
		</Box>
	);
}

export default FeaturedWork;
