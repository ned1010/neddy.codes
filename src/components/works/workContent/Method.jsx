import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import ThemeContext from "@/context/ThemeContext";

import PropTypes from "prop-types";

function Method({method, subtitleStyle}) {
    const {theme} = useContext(ThemeContext);
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
			{method.map((item, i) => {
				return (
					<Box key={i}>
						<Typography sx={{ ...subtitleStyle, marginBottom: "1rem" }}>{item.name}</Typography>
						<Box sx={{}}>
							{item.content.map((contentItem, j) => {
								return (
									<Box key={j} sx={{ borderRadius: "10px", margin: "1rem 0" }}>
										<Typography sx={{ ...subtitleStyle, fontSize: "2rem" }}>
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
										<Box>
											{contentItem.img && <img src={contentItem.img} className="methods__img" />}
											{contentItem.video && (
												<video controls className="methods__video">
													<source src={contentItem.video} type="video/mp4" />
													Your browser does not support the video tag.
												</video>
											)}
										</Box>
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

export default Method;

Method.propTypes = {
    method: PropTypes.arrayOf(PropTypes.object).isRequired,
    subtitleStyle: PropTypes.object.isRequired
}