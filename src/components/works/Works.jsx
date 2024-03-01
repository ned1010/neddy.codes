import { Box, Typography } from "@mui/material";
import React from "react";
import FeaturedWork from "@/components/home/FeaturedWork";
import Work from "./Work";

import Footer from "../footer/Footer";
import Banner from "./Banner";

function Works() {

	return (
		<Box sx={{maxWidth: "1200px", margin: "0 auto", paddingTop: "7rem" }}>
			<Banner />
			<FeaturedWork />
			<Footer />
		</Box>
	);
}

export default Works;
