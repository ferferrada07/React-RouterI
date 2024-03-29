import { Box, Typography } from "@mui/material";

export default function Footer() {
	return (
		<Box sx={{ flexGrow: 1, "& > :not(style)": { m: 0, p: 0 } }}>
			<Typography
				variant="h6"
				component="div"
				sx={{
					flexGrow: 1,
					backgroundColor: "pink",
					color: "white",
					height: "3rem",
				}}
				display="flex"
				alignItems={"center"}
				justifyContent="center"
			>
				HappyCake
			</Typography>
		</Box>
	);
}