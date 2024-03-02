import { Box, Typography } from "@mui/material";
import bookItems from "@/data/books";
import { useContext } from "react";
import ThemeContext from "@/context/ThemeContext";
import whiteAnimatedGif from "@/assets/animated_mouse.gif";
import darkAnimatedGif from "@/assets/dark-cursor.gif";
export default function BookSection() {
	const { theme } = useContext(ThemeContext);
	return (
		<Box sx={{ p: "0 2rem", margin: "5rem 0" }}>
			<Typography
				variant="h1"
				sx={{
					fontSize: "5rem",
					fontWeight: "700",
					"@media (max-width:768px)": {
						fontSize: "3rem",
					},
				}}
			>
				{" "}
				Transformative <span className="about__reading">Readings</span>
			</Typography>
			<Typography
				variant="h3"
				sx={{
					lineHeight: "4rem",
					fontWeight: "400",
					fontSize: "3rem",
					margin: "2rem 0",
					"@media (max-width: 768px)": {
						fontSize: "2rem",
						lineHeight: "3rem",
						margin: "1rem 0",
					},
				}}
			>
				Books that have had a profound <span className="word__style">impact </span> in my life and
				continue to <span className="word__style">influence</span> me today.
			</Typography>
			<Box
				sx={{
					display: "grid",
					gridTemplateColumns: "repeat(2, 1fr)",
					gap: "4rem",
					"@media (max-width: 767px)": {
						gridTemplateColumns: "repeat(1, 1fr)",
						gap: "2rem",
					},
				}}
			>
				{bookItems.map((book) => {
					return (
						<Box
							key={book.id}
							sx={{
								display: "grid",
								gridTemplateColumns: "repeat(2, 1fr)",
								gap: "2rem",
								"@media (max-width: 768px)": {
									gap: "1rem",
								},
							}}
						>
							<img src={book.img} className="book__img" />
							<Box>
								<Typography
									variant="h4"
									sx={{
										fontSize: "3rem",
										fontWeight: "500",
										"@media (max-width: 767px)": {
											fontSize: "1.5rem",
										},
										"@media (max-width: 1024px) and (min-width: 768px)": {
											fontSize: "2rem",
										},
									}}
								>
									{book.title}
								</Typography>
								<Typography
									variant="h6"
									sx={{
										fontSize: "2rem",
										fontWeight: "400",
										margin: "1rem 0",
										"@media (max-width: 767px)": {
											fontSize: "1.25rem",
										},
										"@media (max-width: 1024px) and (min-width: 768px)": {
											fontSize: "1.5rem",
										},
									}}
								>
									{book.author}
								</Typography>
								<Typography
									variant="p"
									sx={{
										fontSize: "1.5rem",
										"@media (max-width: 767px)": {
											fontSize: "1.2rem",
										},
									}}
								>
									{book.message}
								</Typography>
							</Box>
						</Box>
					);
				})}
			</Box>
		</Box>
	);
}
