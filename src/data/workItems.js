//this is individual work
//if not a mobile view then show the table of contents
// table of contents
/*
1. Topic
2. Team (my_role, supervisors, SLWA and Curtin HIVE, skills)
2. Abstract ()
3. Overview -> Key goals and what I had to 
5. Methods -> how I achieved it
6. Result -> 
7. Future work -> 
8. Reflection -> what are some of things I learn, or could be improved


*/

import oldPerth from "@/assets/old-perth.png";
import qrCode from "@/assets/qr-code.png";
import oldPerthVideo from "@/assets/oldPerth.mp4";
const workItems = [
	{
		id: "oldperth",
		title: {
			content: "Developing an interactive kiosk version of OldPerth",
			abstract:
				"Browse 10,000 historical images of Perth on a custom kiosk version of the OldPerth website.",
		},
		metadata: {
			role: "Developer & Researcher",
			timeline: "Nov 2023 - Feb 2024",
			skills: ["Python", "JavaScript", "jQuery", "CSS", "Visual Design"],
		},
		overview: [
			{
				content:
					"OldPerth functions like Google Maps, displaying images instead of location data. It features 10,000+ geolocated images of Perth and nearby areas on an interactive map. Its frontend, built from Dan Van's OldNYC code, offers map-based navigation, with some features customized for Perth.",
				img: oldPerth,
			},
			{
				content:
					"OldPerth’s backend relies on the open-source Python library LibClean, developed by Max Collins, simplifying the reading of standard library catalogue formats such as MARC 21 and facilitating image geolocation based on extracted metadata. It also integrates a Google Form for users to submit accurate addresses for images.",
				img: "",
			},
		],
		challenges: [
			{
				name: "Existing OldPerth's Limitations",
				content: [
					{
						title: "Unauthorised Redirection issues",
						content:
							"Numerous external links increase unauthorized access risks, thus requiring an alternative method.",
					},
					{
						title: "No Interactivity",
						content:
							"Idle state reduces user engagement; a kiosk version needs to enhance interactivity.",
					},
					{
						title: "No Automatic Resetting",
						content:
							"Lack of automatic reset after one user has the potential to lead to a confusing information.",
					},
				],
			},
		],
		method: [
			{
				name: "Solution Methods",
				content: [
					{
						title: "QR Code",
						content:
							"QR codes to replace external links on the site, allowing users to access content while maintaining kiosk security and privacy.",
						img: qrCode,
					},
					{
						title: "Interactive Feature",
						content:
							"Interactive Feature Generation: An interactive feature that automatically loads images from random locations is integrated into the website, serving the dual purpose of attracting user attention and ensuring a seamless user experience when using the kiosks.",
						video: oldPerthVideo,
					},
					{
						title: "Inclusion of other contents",
						content:
							"The State Library’s catalogue collection extends beyond photographs to include extensive audio and video collections. The site's backend was modified to add videos and audios to OldPerth’s database.",
					},
				],
			},
		],
		result: [
			{
				name: "Targets Met",
				content: [
					"17 static links and over 10,000 images linked to the State Library’s catalogue are replaced by QR codes. A QR code appears instead of opening a new tab, keeping all user activities, including browsing and navigation, within the site",
					"The website no longer remains idle in the absence of user activity; instead, it moves to a random location and loads images.",
				],
			},
		],
		reflection: [
			{
				name: "Reflection",
				content: [
					{
						title: "Learning to be Patient",
						content:
							"Switching from team projects to solo work felt entirely new. I felt challenged at first and the slow progress made me doubt my skills. Thankfully, my supervisors provided constant support. I was able to stay patient and focused, tackling one thing at a time, rather than trying to fix everything at once with their guidance.",
					},
					{
						title: "Communication",
						content:
							"Regular communication through weekly meetings, both with fellow interns and supervisors, proved invaluable in maintaining clarity and setting achievable goals. I found that having a clear communication in resolves half of the problem before the navigating the challenge. It made me realise the important importance of understanding the 'why and 'how' behind project decisions.",
					},
				],
			},
		],
	},
];

export default workItems;
