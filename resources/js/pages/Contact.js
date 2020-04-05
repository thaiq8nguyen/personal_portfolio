import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import {
	Button,
	Container,
	Snackbar,
	SnackbarContent,
	TextField,
	Typography
} from "@material-ui/core";

import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";

import Navbar from "../components/Navbar";

const useStyles = makeStyles((theme) => ({
	titleContainer: {
		display: "flex",
		justifyContent: "center",
		margin: theme.spacing(3, 0)
	},
	confirmationContainer: {
		marginTop: theme.spacing(3)
	}
}));



const Contact = () => {
	const classes = useStyles();

	const [messageSent, setMessageSent] = useState(false);
	const [confirmation, setConfirmation] = useState("Test");

	

	const ContactSchema = Yup.object().shape({
		contactName: Yup.string()
			.min(2, "Contact name is too short")
			.max(50, "Contact name is too long")
			.required("Contact name is required"),
		email: Yup.string().email("Invalid email").required("Email is required")
	});
	return (
		<div>
			<Helmet>
				<title>Contact >> Thai Nguyen</title>
			</Helmet>
			<Navbar />
			<Container maxWidth="md">
				<Container className={classes.titleContainer}>
					<Typography variant="h4">Let's get in touch!</Typography>
				</Container>
				<Container>
					<Formik
						initialValues={{
							contactName: "",
							email: "",
							subject: "",
							message: ""
						}}
						onSubmit={(values, action) => {
							
							axios
								.post("/api/contact", values)
								.then((response) => {
									setMessageSent(true);
									setConfirmation(response.data.message);
									action.resetForm();
								})
								.catch((errors) => {
									
									if (errors.response) {
										setMessageSent(true);
										if (errors.response.status === 500) {
											
											setConfirmation(errors.data.message);
											
										} else if (errors.response.status === 422) {
											setConfirmation("Your message has missing required information!")
										}
										action.resetForm()
										
									}
									
								});
						}}
						render={(formikProps) => (
							<ContactForm {...formikProps} />
						)}
						validationSchema={ContactSchema}
					/>
				{ messageSent && <Container className={classes.confirmationContainer}>
					<Typography variant="body1">{confirmation}</Typography>
				</Container>}
				</Container>
				
				
					
				
			</Container>
		</div>
	);
};
const formStyles = makeStyles((theme) => ({
	
}));
const ContactForm = ({
	values,
	errors,
	touched,
	handleChange,
	handleSubmit,
	handleBlur,
	isLoading,
	contactError
}) => {
	const classes = formStyles();
	return (
		<div>
			<Container>
				<form noValidate onSubmit={handleSubmit}>
					<TextField
						name="contactName"
						margin="normal"
						required
						fullWidth
						id="contactName"
						value={values.contactName}
						onChange={handleChange}
						onBlur={handleBlur}
						label="Your Name (required)"
						type="text"
						variant="outlined"
						helperText={
							touched.contactName ? errors.contactName : ""
						}
						error={
							touched.contactName && Boolean(errors.contactName)
						}
					/>
					<TextField
						name="email"
						margin="normal"
						required
						fullWidth
						id="email"
						value={values.email}
						onChange={handleChange}
						onBlur={handleBlur}
						label="Your Email (required)"
						type="text"
						variant="outlined"
						helperText={touched.email ? errors.email : ""}
						error={touched.email && Boolean(errors.email)}
					/>
					<TextField
						name="subject"
						margin="normal"
						fullWidth
						id="subject"
						value={values.subject}
						onChange={handleChange}
						onBlur={handleBlur}
						label="Subject"
						type="text"
						variant="outlined"
					/>
					<TextField
						name="message"
						margin="normal"
						fullWidth
						id="message"
						value={values.message}
						onChange={handleChange}
						onBlur={handleBlur}
						label="Message"
						type="text"
						variant="outlined"
						multiline
						rows="5"
					/>
					<Button type="submit" variant="contained" color="primary">
						Send
					</Button>
					
					
				</form>
			</Container>
			
		</div>
	);
};
export default Contact;
