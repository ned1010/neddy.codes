import workItems from "@/data/workItems";
import { Box, Typography, Button } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";

import ProjectDetail from "./ProjectDetail";
import MetaData from "./MetaData";
import Overview from "./Overview";
import Challenge from "./Challenge";
import Method from "./Method";
import Result from "./Result";
import Reflection from "./Reflection";

import NotFound from "./NotFound";

function WorkContent() {
	const navigate = useNavigate();
	//this returns the id of the work
	const { id } = useParams();
	const matchedWork = workItems.find((workItem) => workItem.id === id);
	// console.log(matchedWork);

	//link styles
	const subtitleStyle = {
		fontSize: "2rem",
		fontWeight: "700",
		"@media (max-width: 768px)": {
			fontSize: "1.5rem",
		},
	};

	if (!matchedWork) {
		return <NotFound />;
	}

	return (
		matchedWork && (
			<Box>
				<Box>
					<ProjectDetail
						id={matchedWork.title.id}
						title={matchedWork.title.content}
						abstract={matchedWork.title.abstract}
					/>

					<MetaData
						id={matchedWork.metadata.id}
						role={matchedWork.metadata.role}
						timeline={matchedWork.metadata.timeline}
						skills={matchedWork.metadata.skills}
						subtitleStyle={subtitleStyle}
					/>

					<Overview overviewList={matchedWork.overview} subtitleStyle={subtitleStyle} />

					<Challenge challenges={matchedWork.challenges} subtitleStyle={subtitleStyle} />

					<Method method={matchedWork.method} subtitleStyle={subtitleStyle} />
					<Result result={matchedWork.result} subtitleStyle={subtitleStyle} />
					<Reflection reflection={matchedWork.reflection} subtitleStyle={subtitleStyle} />
				</Box>
				<Typography
					sx={{
						textAlign: "center",
						fontSize: "5rem",
						margin: "3rem 0",
						fontFamily: "Caveat",
						fontWeight: "700",
						"@media (max-width: 768px)": {
							fontSize: "2rem",
							margin: "1rem 0",
						},
					}}
				>
					Thanks for reading!
				</Typography>
				<Button
					variant="contained"
					sx={{ left: "50%", transform: "translate(-50%, -50%)" }}
					onClick={() => navigate(-1)}
				>
					Back to Work Page
				</Button>
			</Box>
		)
	);
}

export default WorkContent;
