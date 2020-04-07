import React from "react";
import { Helmet } from "react-helmet";
import { Box, Container, Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../components/Navbar";
import RecentProjects from "../components/RecentProjects";

import ProfileImage from "../../images/profile.png";

const useStyles = makeStyles((theme) => ({
	introContainer: {
		marginTop: theme.spacing(6)
	},
	profile: {
		display: "flex",
		justifyContent: "center"
	},
	profileIntro: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: "100%",
		padding: theme.spacing(1)
	},
	recentProjectContainer: {
		marginTop: theme.spacing(4)
	}
}));
const Home = () => {
	const classes = useStyles();

	return (
		<div>
			<Helmet>
				<title>Thai Nguyen</title>
			</Helmet>
			<Navbar />
			<Container className={classes.introContainer}>
				<Grid container>
					<Grid container item sx={12} spacing={2}>
						<Grid item xs={12} sm={6}>
							<Box className={classes.profile}>
								<img src={ProfileImage} />
							</Box>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Box className={classes.profileIntro}>
								<Typography variant="h3">
									Hello, my name is Thai Nguyen
								</Typography>
							</Box>
						</Grid>
					</Grid>
					<Grid
						container
						item
						xs={12}
						className={classes.recentProjectContainer}
					>
						<RecentProjects />
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default Home;
