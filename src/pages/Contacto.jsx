import * as React from "react";
import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import Form from "../components/Form";

export default function Contacto() {
	return (
		<Container maxWidth="md">
			<Box
				component="form"
				sx={{
					"& > :not(style)": { m: 1 },
				}}
				noValidate
				autoComplete="off"
				display="flex"
				flexDirection="column"
				color="white"
			>
				<Typography variant="h4" gutterBottom textAlign={"center"}>
				Descubre el placer de compartir Cakes Santiago
				</Typography>
				<Form></Form>
			</Box>
		</Container>
	);
}
