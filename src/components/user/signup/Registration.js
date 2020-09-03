import * as React from 'react';
import { Formik, Form, Field } from 'formik';
import { Button, Box, CircularProgress, FormControlLabel, Radio } from '@material-ui/core';
import { TextField, RadioGroup } from 'formik-material-ui';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import { postUserRegistration } from '../../../util/APIUtils';
import './Registration.css';
import Navigation from '../../navigation/Navigation';

const RegistrationSchema = Yup.object().shape({
	email: Yup.string().email('Enter a valid email').required('Email is required'),
	firstName: Yup.string().required('First Name is required'),
	lastName: Yup.string().required('Last Name is required'),
	userName: Yup.string().required('User Name is required'),
	password: Yup.string().min(2, 'Password must contain at least 2 characters').required('Enter your password')
});
function Registration() {
	const history = useHistory();
	return (
		<>
			<Navigation />
		
		<div className="registration-container">
			<Formik
				initialValues={{
					firstName: '',
					lastName: '',
					email: '',
					userName: '',
					password: '',
					gender: ''
				}}
				onSubmit={(values, { setSubmitting }) => {
					const sendPostRequest = async () => {
						try {
							const resp = await postUserRegistration(values);
							console.log(resp.data);
							history.push('/login');
						} catch (err) {
							console.error(err);
						}
					};
					sendPostRequest();
				}}
				validationSchema={RegistrationSchema}
			>
				{({ submitForm, isSubmitting }) => (
					<Form autoComplete="off">
						<Box>
							<Field
								component={TextField}
								name="firstName"
								type="text"
								label="First Name"
								margin="dense"
								variant="outlined"
							/>
						</Box>
						<br />
						<Box>
							<Field
								component={TextField}
								name="lastName"
								type="text"
								label="Last Name"
								margin="dense"
								variant="outlined"
							/>
						</Box>
						<br />
						<Box>
							<Field
								component={TextField}
								name="email"
								type="email"
								label="Email"
								margin="dense"
								variant="outlined"
							/>
						</Box>
						<br />
						<Box>
							<Field
								component={TextField}
								name="userName"
								type="text"
								label="User Name"
								margin="dense"
								variant="outlined"
							/>
						</Box>
						<br />
						<Box>
							<Field
								component={TextField}
								type="password"
								label="Password"
								name="password"
								margin="dense"
								variant="outlined"
							/>
						</Box>
						<br />
						<Field component={RadioGroup} name="gender">
							<FormControlLabel
								value="male"
								control={<Radio disabled={isSubmitting} />}
								label="Male"
								disabled={isSubmitting}
							/>
							<FormControlLabel
								value="female"
								control={<Radio disabled={isSubmitting} />}
								label="Female"
								disabled={isSubmitting}
							/>
							<FormControlLabel
								value="none"
								control={<Radio disabled={isSubmitting} />}
								label="None"
								disabled
							/>
						</Field>
						<Box>
							<Button
								variant="contained"
								className="login-form-button"
								disabled={isSubmitting}
								startIcon={isSubmitting ? <CircularProgress size="1rem" /> : null}
								onClick={submitForm}
							>
								Submit
							</Button>
						</Box>
					</Form>
				)}
			</Formik>
		</div>
		</>
	);
}
export default Registration;
