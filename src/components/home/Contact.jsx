import { Box, Typography } from "@mui/material";
import React from "react";

function Contact() {
	return (
		<Box sx={{ display: "flex", justifyContent: "center" }}>
			<Box>
				<Typography variant="h3">Contact</Typography>
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						border: "2px solid yellow",
					}}
				>
					<Typography>ASK Me</Typography>
				</Box>
			</Box>
		</Box>
	);
}

export default Contact;
