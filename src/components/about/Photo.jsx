import { Box, Typography, ImageList, ImageListItem } from "@mui/material";
import photoItems from "@/data/photos";
import { useContext } from "react";
import ThemeContext from "@/context/ThemeContext";

function Photo() {
	const { theme } = useContext(ThemeContext);
	return (
		<Box
			sx={{
				padding: "0 2rem",
				borderTop:
					theme === "light"
						? "2px solid rgba(199, 200, 204, 0.8)"
						: "2px solid rgba(180, 180, 184, 0.5)",
				paddingTop: "5rem",
				"@media (max-width: 768px)": {
					paddingTop: "3rem",
				},
			}}
		>
			<Typography
				variant="h3"
				sx={{
					lineHeight: "6rem",
					fontWeight: "400",
					fontSize: "4rem",
					"@media (max-width: 768px)": {
						fontSize: "2rem",
						lineHeight: "3rem",
					},
				}}
			>
				Apart from coding and reading, I like taking pictures 📸.
			</Typography>
			<ImageList variant="masonry" cols={3} gap={15} sx={{ margin: "3rem 0 5rem" }}>
				{photoItems.map((item) => (
					<ImageListItem key={item.img}>
						<img
							srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
							src={`${item.img}?w=248&fit=crop&auto=format`}
							alt={item.title}
							loading="lazy"
							style={{ borderRadius: "2px" }}
						/>
					</ImageListItem>
				))}
			</ImageList>
		</Box>
	);
}

export default Photo;
