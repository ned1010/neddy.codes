import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function NotFound() {
	const navigate = useNavigate();
	return (
		<Box sx={{ height: "100vh", padding: "10rem 5rem" }}>
			<Typography
				sx={{
					fontFamily: "Caveat",
					fontSize: "5rem",
					"@media (max-width: 768px)": {
						fontSize: "2rem",
					},
				}}
			>
				In development phase
			</Typography>
			<Button
				variant="contained"
				sx={{
					fontSize: "2rem",
					"@media (max-width: 768px)": {
						fontSize: "1rem",
					},
				}}
				onClick={() => navigate(-1)}
			>
				go back to view other works
			</Button>
		</Box>
	);
}

export default NotFound;
