import * as React from 'react';
import { Formik, Form, Field } from 'formik';
import { Button, LinearProgress, Box } from '@material-ui/core';
import { TextField } from 'formik-material-ui';
import * as Yup from 'yup';
import axios from 'axios';

const LoginSchema = Yup.object().shape({
	email: Yup.string().email('Enter a valid email').required('Email is required'),
	password: Yup.string().min(4, 'Password must contain at least 4 characters').required('Enter your password')
});
function Login() {
	return (
		<Formik
			initialValues={{
				email: '',
				password: ''
			}}
			onSubmit={(values, { setSubmitting }) => {
				const sendPostRequest = async () => {
					try {
						const resp = await axios.post('http://localhost:5000/api/login', values);
						console.log(resp.data);
					} catch (err) {
						// Handle Error Here
						console.error(err);
					}
				};
				sendPostRequest();
			}}
			validationSchema={LoginSchema}
		>
			{({ submitForm, isSubmitting }) => (
				<Form>
					<Box margin={2}>
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
					<Box margin={2}>
						<Field
							component={TextField}
							type="password"
							label="Password"
							name="password"
							margin="dense"
							variant="outlined"
						/>
					</Box>

					{isSubmitting && <LinearProgress />}
					<br />
					<Box margin={2}>
						<Button variant="contained" color="primary" disabled={isSubmitting} onClick={submitForm}>
							Submit
						</Button>
					</Box>
				</Form>
			)}
		</Formik>
	);
}
export default Login;
