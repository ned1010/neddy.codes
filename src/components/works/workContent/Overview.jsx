import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import ThemeContext from "@/context/ThemeContext";

import PropTypes from "prop-types";

function Overview({ overviewList, subtitleStyle }) {
	const { theme } = useContext(ThemeContext);

	return (
		<Box
			id="overview"
			sx={{
				padding: "3rem 0",
				borderBottom:
					theme === "light"
						? "2px solid rgba(199, 200, 204, 0.8)"
						: "2px solid rgba(180, 180, 184, 0.5)",
			}}
		>
			<Typography sx={subtitleStyle}>Project Overview</Typography>
			<Box sx={{ paddingTop: "1rem" }}>
				{overviewList.map((itemList, i) => {
					return (
						<Box key={i}>
							<Typography
								sx={{
									fontSize: "2rem",
									"@media (max-width: 768px)": {
										fontSize: "1.5rem",
									},
								}}
							>
								{itemList.content}
							</Typography>
							{itemList.img && (
								<Typography>
									<img src={itemList.img} className="overview__img" />
								</Typography>
							)}
						</Box>
					);
				})}
			</Box>
		</Box>
	);
}

export default Overview;

Overview.propTypes = {
	overviewList: PropTypes.arrayOf(PropTypes.object).isRequired,
	subtitleStyle: PropTypes.object.isRequired,
};
