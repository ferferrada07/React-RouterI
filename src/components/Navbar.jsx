import {
	AppBar,
	Box,
	Button,
	IconButton,
	Toolbar,
	Typography,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { IoIosContact } from "react-icons/io";
import { BsCake } from "react-icons/bs";
import { NavLink } from "react-router-dom";


export default function Navbar() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						HappyCake
					</Typography>

					<Button color="inherit">
						<NavLink to="/" className="navClass">
							<BsCake />
							Home
						</NavLink>
					</Button>
					<Button color="inherit">
						<NavLink to="/contacto" className="navClass">
							<IoIosContact  /> Contacto
						</NavLink>
					</Button>
				</Toolbar>
			</AppBar>
		</Box>
	);
}