import { Box } from "@mui/material";

import WorkContent from "./workContent/workContent";

function Work() {
	return (
		<Box
			sx={{
				padding: "7rem 2rem 2rem",
				paddingTop: "7rem",
				maxWidth: "1200px",
				margin: "0 auto",
			}}
		>
			{/* Main content  */}

			<WorkContent />
		</Box>
	);
}

export default Work;
