//contains 3 projects
// 1. OldPerth Internship work
// 2. Travelling Tales
// 3. NBA analysis

//work have following features
// 1. id,
// 2. companyName
// 3. category
// 4. abstract
// 5. field
// 6. imgSource
// 7. project link
// 8. Router link to the work page
// 9. image

import { v4 as uniqueID } from "uuid";

//importing images
import perthImage from "@/assets/perth.png";
import travelImg from "@/assets/travelling.png";
import weatherApp from "@/assets/weatherApp.png";

const featureWorks = [
	{
		id: "oldperth",
		companyName: "Curtin HIVE (Hub for Visualisation & eResearch)",
		category: "Software Engineering & Research",
		abstract:
			"Creating an interactive kiosk version of the OldPerth website to showcase over 10,000 geolocated images from Perth and its surroundings",
		field: "Software \u007C Research \u007C Internship",
		imgSource: perthImage,
		projectLink: "https://kiosk.oldperth.org.au",
	},

	{
		id: "travelling-tales",
		companyName: "Travelling Tales",
		category: "Web Design",
		abstract:
			"Developed a responsive website for a non-profit organization that works with volunteering programs and assists tourists in Ladakh.",
		field: "Web \u007C UX Design \u007C Non-profit Work",
		imgSource: travelImg,
		projectLink: "https://travellingtales.netlify.app/",
	},

	{
		id: "weather-app",
		companyName: "Weather App",
		category: "Web Application",
		abstract:
			"Developed a simple weather application with search functionality and forecasting options. The app allows users to search for weather forecasts for different locations and provides basic weather data such as current conditions and five days forecasts. ",
		field: "Full Stack \u007C Web \u007C UI Design ",
		imgSource: weatherApp,
		projectLink: "https://weather-app-beta-bay-23.vercel.app/",
	},
];

export default featureWorks;
