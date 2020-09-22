import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Button, Box } from '@material-ui/core';
import ColoredLinearProgress from '../ColoredLinearProgress';
import { TextField } from 'formik-material-ui';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import { postLogin } from '../../../util/APIUtils';
import './Login.css';
import Navigation from '../../navigation/Navigation';
import { useLogin } from '../../contexts/LoginContext';
import { useUser } from '../../contexts/UserContext';

const LoginSchema = Yup.object().shape({
	email: Yup.string().email('Enter a valid email').required('Email is required'),
	password: Yup.string().min(3, 'Password must contain at least 3 characters').required('Enter your password')
});
function Login() {
	const history = useHistory();
	const {setAuthentication } = useLogin()
	const {setUserId,setUserRole,setUserEmail} = useUser()
	
	return (
		<>
		<Navigation />
		<div className="login-container">
			<Formik
				initialValues={{
					email: '',
					password: ''
				}}
				onSubmit={(values, { setSubmitting }) => {
					const sendPostRequest = async () => {
						try {
							const resp = await postLogin(values);
							if (resp.status === 200) {
								history.push('/');
								localStorage.setItem('token', resp.data.accessToken);
								setUserId(resp.data.data.id)
								setUserEmail(resp.data.data.email)
								setUserRole(resp.data.data.role)
								setAuthentication(true);
							} else {
								alert('Wrong credentials');
							}
						} catch (err) {
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

						{isSubmitting && <ColoredLinearProgress />}
						<br />
						<Box margin={2}>
							<Button
								variant="contained"
								color="secondary"
								className="login-form-button"
								disabled={isSubmitting}
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
export default Login;
