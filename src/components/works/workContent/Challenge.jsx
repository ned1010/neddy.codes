import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import ThemeContext from "@/context/ThemeContext";

import PropTypes from "prop-types";


function Challenge({challenges, subtitleStyle}) {
    const {theme} = useContext(ThemeContext);
	return (
		<Box
			id="challenges"
			sx={{
				padding: "3rem 0",
				borderBottom:
					theme === "light"
						? "2px solid rgba(199, 200, 204, 0.8)"
						: "2px solid rgba(180, 180, 184, 0.5)",
			}}
		>
			{challenges.map((item, i) => {
				return (
					<Box key={i}>
						<Typography sx={subtitleStyle}>{item.name}</Typography>
						<Box
							sx={{
								display: "grid",
								gridTemplateColumns: "repeat(2, 1fr)",
								gap: "2rem",
								paddingTop: "1rem",
								"@media (max-width: 768px)": {
									gridTemplateColumns: "repeat(1, 1fr)",
								},
							}}
						>
							{item.content.map((contentItem, j) => {
								return (
									<Box
										key={j}
										sx={{
											border:
												theme === "light"
													? "2px solid rgba(199, 200, 204, 0.8)"
													: "2px solid rgba(180, 180, 184, 0.5)",
											borderRadius: "10px",
											padding: "0.5rem",
											backgroundColor: theme === "light" ? "#EEEDEB" : "#3D3B40",
										}}
									>
										<Typography
											sx={{
												...subtitleStyle,
												fontSize: "2rem",
												fontWeight: "500",
												textAlign: "center",
												textDecoration: "underline",
											}}
										>
											{contentItem.title}
										</Typography>
										<Typography
											sx={{
												fontSize: "2rem",
												"@media (max-width: 768px)": {
													fontSize: "1.5rem",
												},
											}}
										>
											{contentItem.content}
										</Typography>
									</Box>
								);
							})}
						</Box>
					</Box>
				);
			})}
		</Box>
	);
}

export default Challenge;


Challenge.propTypes = {
    challenges: PropTypes.arrayOf(PropTypes.object).isRequired,
    subtitleStyle: PropTypes.object.isRequired
}