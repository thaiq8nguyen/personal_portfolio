import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
	AppBar,
	Button,
	Container,
	Divider,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemText,
	Toolbar,
	Typography
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	title: {
		fontFamily: "Titillium Web",
		margin: theme.spacing(1, 0)
	},
	toolbar: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between"
	},
	list: {
		width: 250
	},
	briefIntroContainer: {
		marginBottom: theme.spacing(2)
	},
	siteNavigationTitleContainer: {
		display: "flex",
		justifyContent: "center",
		marginTop: theme.spacing(2)
	}
}));

const NavBar = () => {
	const classes = useStyles();
	const [sideMenu, setSideMenu] = useState(false);

	const handleToggleSideMenu = () => {
		setSideMenu(!sideMenu);
	};
	const handleCloseSideMenu = () => {
		setSideMenu(false);
	};

	const sideMenuContent = () => (
		<div style={{ minHeight: "100vh" }} className={classes.list}>
			<IconButton onClick={handleCloseSideMenu}>
				<CloseIcon />
			</IconButton>
			<Container className={classes.briefIntroContainer}>
				<Typography variant="body2">
					<strong>Thai Nguyen</strong> is a web developer, tinkerer,
					and traveler.
				</Typography>
				<br />
				<Typography variant="body2">
					See his projects in the Projects page.
				</Typography>
			</Container>
			<Divider />
			<Container className={classes.siteNavigationTitleContainer}>
				<Typography>SITE NAVIGATION</Typography>
			</Container>

			<List>
				<ListItem button component={Link} to="/">
					<ListItemText>thaiqnguyen.com</ListItemText>
				</ListItem>
				<ListItem button component={Link} to="/projects">
					<ListItemText>Projects</ListItemText>
				</ListItem>
				<ListItem button component={Link} to="/contact">
					<ListItemText>Contact</ListItemText>
				</ListItem>
				<ListItem button component={Link} to="/about">
					<ListItemText>About</ListItemText>
				</ListItem>
			</List>
		</div>
	);

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar className={classes.toolbar}>
					<IconButton
						edge="start"
						aria-label="menu"
						style={{ color: "white" }}
						onClick={handleToggleSideMenu}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h3" className={classes.title}>
						Thai Nguyen
					</Typography>
					<div></div>
				</Toolbar>
			</AppBar>

			<Drawer
				open={sideMenu}
				ModalProps={{ onBackdropClick: handleToggleSideMenu }}
			>
				{sideMenuContent()}
			</Drawer>
		</div>
	);
};

export default NavBar;
