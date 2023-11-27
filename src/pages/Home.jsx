import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function Home() {
	return (
		<Container
			maxWidth="md"
			sx={{
				"& > :not(style)": { p: 5 },
			}}
		>
			<Box display={"flex"} flexDirection={"column"} color="white">
				<Typography
					variant="h2"
					gutterBottom
					textAlign={"center"}
					fontWeight={"500"}
				>
					Bienvenido a HappyCake
				</Typography>
				<Typography
					variant="h5"
					gutterBottom
					textAlign={"center"}
					fontWeight={"400"}
				>
					Las Mejores Tortas Personalizadas De Santiago
				</Typography>
			</Box>
		</Container>
	);
}