import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import ThemeContext from "@/context/ThemeContext";

import PropTypes from "prop-types";

function Reflection({ reflection, subtitleStyle }) {
	const { theme } = useContext(ThemeContext);

	return (
		<Box
			id="reflection"
			sx={{
				padding: "3rem 0 0",
			}}
		>
			{reflection.map((resultItem, i) => {
				return (
					<Box key={i}>
						<Typography sx={{ ...subtitleStyle, marginBottom: "1rem" }}>
							{resultItem.name}
						</Typography>
						<Box
							sx={{
								display: "grid",
								gridTemplateColumns: "repeat(2, 1fr)",
								gap: "2rem",
								"@media (max-width: 768px)": {
									gridTemplateColumns: "repeat(1, 1fr)",
									gap: "1rem",
								},
							}}
						>
							{resultItem.content.map((contentList, i) => {
								return (
									<Box
										key={i}
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
										<Typography sx={subtitleStyle}>{contentList.title}</Typography>
										<Typography
											sx={{
												fontSize: "2rem",
												"@media (max-width: 768px)": {
													fontSize: "1.5rem",
												},
											}}
										>
											{contentList.content}
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

export default Reflection;

Reflection.propTypes = {
	reflection: PropTypes.arrayOf(PropTypes.object).isRequired,
	subtitleStyle: PropTypes.object.isRequired,
};
