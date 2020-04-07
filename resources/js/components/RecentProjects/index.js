import React from "react";
import { Box, Container, Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MatakaLogo from "../../../images/mataka_logo.png";
import GithubLogo from "../../../images/github_logo.png";
import ReactLogo from "../../../images/react_logo.png";
import VueLogo from "../../../images/vue_logo.png";
import LaravelLogo from "../../../images/laravel_logo.png";
import NodeLogo from "../../../images/nodejs_logo.png";
import SalonRegisterLogo from "../../../images/salon_register_logo.png";
import ReceiptorLogo from "../../../images/receiptor_logo.png";
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		flexDirection: "row",
		marginTop: theme.spacing(1)
	},
	projectContainer: {
		flex: 1
	},
	projectTitle: {
		margin: theme.spacing(1, 0)
	},
	projectInnerContainer: {
		margin: theme.spacing(1, 0)
	},
	techLogoWithWord: {
		display: "flex"
	},
	logoContainer: {
		display: "flex",
		justifyContent: "center"
	}
}));
const RecentProjects = () => {
	const classes = useStyles();

	return (
		<div>
			<Typography variant="h4">Recent Projects</Typography>
			<Grid container spacing={3} className={classes.root}>
				<Grid item xs={12} sm={6} md={4}>
					<Grid container>
						<Grid
							item
							xs={12}
							className={classes.projectInnerContainer}
						>
							<Typography variant="h6">Mataka</Typography>
						</Grid>
						<Grid
							container
							spacing={2}
							item
							xs={12}
							className={classes.projectInnerContainer}
						>
							<Grid item xs={4} className={classes.logoContainer}>
								<img src={MatakaLogo} />
							</Grid>
							<Grid item xs={8}>
								<Typography variant="body2">
									Mataka is a school calendar application. It
									allows coaches and teachers to post events
									for their students. Students can see events
									thru calendar subscription.
								</Typography>
							</Grid>
						</Grid>

						<Grid
							item
							xs={12}
							className={classes.projectInnerContainer}
						>
							<Grid container>
								<Grid item xs={4}>
									<Typography>Built using: </Typography>
								</Grid>
								<Grid item xs={2}>
									<img
										src={ReactLogo}
										width="32px"
										height="32px"
									/>
								</Grid>

								<Grid item xs={2}>
									<img
										src={NodeLogo}
										width="32px"
										height="32px"
									/>
								</Grid>
							</Grid>
						</Grid>
						<Grid
							item
							xs={12}
							className={classes.projectInnerContainer}
						>
							<Grid container justify="center">
								<Grid item xs={3}>
									<a href="https://github.com/thaiq8nguyen/school-calendar-fe">
										<img
											src={GithubLogo}
											width="32px"
											height="32px"
										/>
									</a>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<Grid container>
						<Grid
							item
							xs={12}
							className={classes.projectInnerContainer}
						>
							<Typography variant="h6">Salon Register</Typography>
						</Grid>
						<Grid
							container
							spacing={2}
							item
							xs={12}
							className={classes.projectInnerContainer}
						>
							<Grid item xs={4} className={classes.logoContainer}>
								<img src={SalonRegisterLogo} />
							</Grid>
							<Grid item xs={8}>
								<Typography variant="body2">
									Salon Register enables salon owners to
									record their technician's sales. The
									application removes paper registers with a
									time-saver flexibile platform and built-in
									validation thru Square API.
								</Typography>
							</Grid>
						</Grid>

						<Grid
							item
							xs={12}
							className={classes.projectInnerContainer}
						>
							<Grid container>
								<Grid item xs={4}>
									<Typography>Built using: </Typography>
								</Grid>
								<Grid item xs={2}>
									<img
										src={VueLogo}
										width="32px"
										height="32px"
									/>
								</Grid>

								<Grid
									item
									xs={2}
									className={classes.techLogoWithWord}
								>
									<div style={{ marginRight: "3px" }}>
										<img
											src={LaravelLogo}
											width="32px"
											height="32px"
										/>
									</div>

									<Typography>Laravel</Typography>
								</Grid>
							</Grid>
						</Grid>
						<Grid
							item
							xs={12}
							className={classes.projectInnerContainer}
						>
							<Grid container justify="center">
								<Grid item xs={3}>
									<a href="https://github.com/thaiq8nguyen/salon-management">
										<img
											src={GithubLogo}
											width="32px"
											height="32px"
										/>
									</a>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<Grid container>
						<Grid
							item
							xs={12}
							className={classes.projectInnerContainer}
						>
							<Typography variant="h6">Receiptor</Typography>
						</Grid>
						<Grid
							container
							spacing={2}
							item
							xs={12}
							className={classes.projectInnerContainer}
						>
							<Grid item xs={4} className={classes.logoContainer}>
								<img src={ReceiptorLogo} />
							</Grid>
							<Grid item xs={8}>
								<Typography variant="body2">
									Receiptor is a versatile receipt tracking
									app. It allows users to track their spending
									in a receipt with flexible categories. Users
									can upload a picture of their receipt to the
									app.
								</Typography>
							</Grid>
						</Grid>

						<Grid
							item
							xs={12}
							className={classes.projectInnerContainer}
						>
							<Grid container>
								<Grid item xs={4}>
									<Typography>Built using: </Typography>
								</Grid>
								<Grid item xs={2}>
									<img
										src={ReactLogo}
										width="32px"
										height="32px"
									/>
								</Grid>

								<Grid item xs={2}>
									<img
										src={NodeLogo}
										width="32px"
										height="32px"
									/>
								</Grid>
							</Grid>
						</Grid>
						<Grid
							item
							xs={12}
							className={classes.projectInnerContainer}
						>
							<Grid container justify="center">
								<Grid item xs={3}>
									<a href="https://github.com/Receipt-Tracking-App">
										<img
											src={GithubLogo}
											width="32px"
											height="32px"
										/>
									</a>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
};

export default RecentProjects;
