import Footer from "../footer/Footer";
import { Box } from "@mui/material";
import Intro from "./Intro";
import Photo from "./Photo";
import BookSection from "./BookSection";

function About() {
	return (
		<Box
			className="about__container"
			sx={{ paddingTop: "7rem", maxWidth: "1200px", margin: "0 auto"}}
		>
			<Intro />
			<BookSection />
            <Photo />

			<Footer />
		</Box>
	);
}

export default About;
