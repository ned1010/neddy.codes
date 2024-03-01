import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import ThemeContext from "@/context/ThemeContext";

import PropTypes from "prop-types";
function Result({ result, subtitleStyle }) {
	const { theme } = useContext(ThemeContext);
	return (
		<Box
			sx={{
				padding: "3rem 0",
				borderBottom:
					theme === "light"
						? "2px solid rgba(199, 200, 204, 0.8)"
						: "2px solid rgba(180, 180, 184, 0.5)",
			}}
		>
			{result.map((resultItem, i) => {
				return (
					<Box key={i} id="result">
						<Typography sx={{ ...subtitleStyle, marginBottom: "1rem" }}>
							{resultItem.name}
						</Typography>
						<Box
							sx={{
								display: "grid",
								gridTemplateColumns: "repeat(2, 1fr)",
								gap: "2rem",
								"@media (max-width: 768px)": {
									fontSize: "1.5rem",
									gridTemplateColumns: "repeat(1, 1fr)",
									gap: "1rem",
								},
							}}
						>
							{resultItem.content.map((item, j) => (
								<Typography
									sx={{
										fontSize: "2rem",
										border:
											theme === "light"
												? "2px solid rgba(199, 200, 204, 0.8)"
												: "2px solid rgba(180, 180, 184, 0.5)",
										borderRadius: "10px",
										padding: "0.5rem",
										backgroundColor: theme === "light" ? "#EEEDEB" : "#3D3B40",
										"@media (max-width: 768px)": {
											fontSize: "1.5rem",
										},
									}}
									key={j}
								>
									{item}
								</Typography>
							))}
						</Box>
					</Box>
				);
			})}
		</Box>
	);
}

export default Result;

Result.propTypes = {
	result: PropTypes.arrayOf(PropTypes.object).isRequired,
	subtitleStyle: PropTypes.object.isRequired,
};
