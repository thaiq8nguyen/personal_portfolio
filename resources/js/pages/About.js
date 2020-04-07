import React from "react";
import { Helmet } from "react-helmet";
import { Container, Link, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../components/Navbar";

const useStyles = makeStyles((theme) => ({
	titleContainer: {
		display: "flex",
		justifyContent: "center",
		margin: theme.spacing(3, 0)
	}
}));
const About = () => {
	const classes = useStyles();
	return (
		<div>
			<Helmet>
				<title>About >> Thai Nguyen</title>
			</Helmet>
			<Navbar />
			<Container maxWidth="md">
				<Container className={classes.titleContainer}>
					<Typography variant="h4">About</Typography>
				</Container>
				<Typography variant="body1">
					My name is <strong>Thai Nguyen</strong>, and I am an
					engineer and a creative application developer. I work in a
					HTML5, CSS3 , JavaScript (React, Vue, Node), PHP (Laravel)
					and MySQL technologies, and have experience building blogs,
					sales reporting, and data management applications.
					<br />
					<br />
					I work out of my home office in Los Angeles, California. My
					experience includes root-cause analysis, RF testing,
					information technology management, and full-stack
					application development. I have a track record of getting
					projects done on time and within budget, and quickly adapt
					to new technologies, whether it is a new programming
					language or a piece of software. I hold a Bachelor Degree in
					Electrical Engineering with an emphasis in Communication
					Systems from California State University, Northridge, and
					recently completed Lambda Schools intensive 9 month Full
					Stack Web Development program.
					<br />
					<br />
					In my spare time, I like to learn to build web applications
					using various web frameworks, participate in Internet of
					Thing (IoT) projects. I am always taking lessons from
					Treehouse, Lynda.com, egghead.io and Laracast to learn and
					improve my code.
					<br />
					<br />
					I can also be found online here:
					<br />
					<br />
				</Typography>
				<Link
					href="https://www.linkedin.com/in/tnguyen-web"
					color="inherit"
					variant="body1"
					underline="always"
				>
					Linkedin
				</Link>
				&nbsp;/&nbsp;
				<Link
					href="https://github.com/thaiq8nguyen"
					color="inherit"
					variant="body1"
					underline="always"
				>
					Github
				</Link>
				<br />
				<br />
				<Link
					href="https://www.dropbox.com/s/6najw9x6vvaqyec/Thai_Nguyen_Resume.pdf?dl=0"
					color="primary"
					variant="body1"
					underline="always"
				>
					Resume
				</Link>
			</Container>
		</div>
	);
};

export default About;
