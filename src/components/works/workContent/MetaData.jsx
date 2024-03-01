import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import ThemeContext from "@/context/ThemeContext";

import PropTypes from "prop-types";

function MetaData({role, timeline, skills, subtitleStyle }) {
	const { theme } = useContext(ThemeContext);

	const metaDataStyle = {
		fontSize: "1.5rem",
		fontWeight: "300",
		"@media (max-width: 768px)": {
			fontSize: "1.5rem",
		},
	};
	return (
		<Box
			id="metadata"
			sx={{
				display: "grid",
				gridTemplateColumns: "repeat(3, 1fr)",
				gap: "2rem",
				padding: "3rem 0",
				borderBottom:
					theme === "light"
						? "2px solid rgba(199, 200, 204, 0.8)"
						: "2px solid rgba(180, 180, 184, 0.5)",
				"@media (max-width: 768px)": {
					gridTemplateColumns: "repeat(2, 1fr)",
					gap: "1rem",
				},
			}}
		>
			<Box>
				<Typography sx={subtitleStyle}>My Role</Typography>
				<Typography sx={metaDataStyle}>{role}</Typography>
			</Box>

			<Box>
				<Typography sx={subtitleStyle}>Timeline </Typography>
				<Typography sx={metaDataStyle}>{timeline}</Typography>
			</Box>

			<Box>
				<Typography sx={subtitleStyle}>Technical Skills</Typography>
				{skills.map((item, id) => {
					return (
						<Typography sx={metaDataStyle} key={id}>
							{item}
						</Typography>
					);
				})}
			</Box>
		</Box>
	);
}

export default MetaData;

MetaData.propTypes = {
	role: PropTypes.string.isRequired,
	timeline: PropTypes.string.isRequired,
	skills: PropTypes.arrayOf(PropTypes.string).isRequired,
	subtitleStyle: PropTypes.object.isRequired,
};
