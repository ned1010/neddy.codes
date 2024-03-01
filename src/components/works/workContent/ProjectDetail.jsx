import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import ThemeContext from "@/context/ThemeContext";

import PropTypes from "prop-types";

function ProjectDetail({ title, abstract }) {
	const { theme } = useContext(ThemeContext);
	return (
		<Box
			id="detail"
			sx={{
				borderBottom:
					theme === "light"
						? "2px solid rgba(199, 200, 204, 0.8)"
						: "2px solid rgba(180, 180, 184, 0.5)",
				paddingBottom: "3rem"
			}}
		>
			<Typography
				variant="h4"
				sx={{
					fontSize: "3rem",
					fontWeight: "800",
					paddingBottom: "2rem",
					"@media (max-width: 768px)": {
						fontSize: "2.5rem",
					},
				}}
			>
				{title}
			</Typography>

			<Typography
				variant="p"
				sx={{
					fontSize: "2rem",
					fontWeight: "500",
					"@media (max-width: 768px)": {
						fontSize: "1.5rem",
					},
				}}
			>
				{abstract}
			</Typography>
		</Box>
	);
}

export default ProjectDetail;


ProjectDetail.propTypes = {
	title: PropTypes.string.isRequired,
	abstract: PropTypes.string.isRequired,

}