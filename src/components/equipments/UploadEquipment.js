import React from 'react'
import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';
import { Button, Box,CircularProgress } from '@material-ui/core';
import { TextField } from 'formik-material-ui';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import Navigation from '../navigation/Navigation'
import { postEquipmentRegistration } from '../../util/APIUtils';

const ContentBox = styled.div`
	background-color: white;
	border: 2px solid MediumPurple;
    border-radius: 20px;
	width: 60%;
	font-size: 15px;
	padding: 20px;
	margin: 20px;
`;

const UploadEquipmentSchema = Yup.object().shape({
	itemName: Yup.string().required('Item Name is required'),
	itemQuality: Yup.string().required('Item Quality is required'),
	itemDescription: Yup.string().required('Item Name is required'),
	itemQuantity: Yup.number().required('Item Quantity is required').positive().integer()
});

const UploadEquipment = () => {
	const history = useHistory();
  return (
	  <>
	  <Navigation />
     <div className="equipment-container">
      <ContentBox float="left">Add an Equipment</ContentBox>
	  <div className="equipment-form" float="left">
	  <Formik
				initialValues={{
					itemName: '',
					itemQuality: '',
					itemDescription: '',
					itemQuantity: ''
				}}
				onSubmit={(values, { setSubmitting }) => {
					const sendPostRequest = async () => {
						try {
							const resp = await postEquipmentRegistration(values);
							if (resp.status === 201) {
								history.push('/viewequipments');
							} else {
								alert('Wrong credentials');
							}
						} catch (err) {
							console.error(err);
						}
					};
					sendPostRequest();
				}}
				validationSchema={UploadEquipmentSchema}
			>
				{({ submitForm, isSubmitting }) => (
					<Form>
					<Box>
							<Field
								component={TextField}
								name="itemName"
								type="text"
								label="Item Name"
								margin="dense"
								variant="outlined"
							/>
						</Box>
						<br />
						<Box>
							<Field
								component={TextField}
								name="itemQuality"
								type="text"
								label="Item Quality"
								margin="dense"
								variant="outlined"
							/>
						</Box>
						<br />
						<Box>
							<Field
								component={TextField}
								name="itemDescription"
								type="text"
								label="Item Description"
								margin="dense"
								variant="outlined"
							/>
						</Box>
						<br />
						<Box>
							<Field
								component={TextField}
								name="itemQuantity"
								type="number"
								label="Item Quantity"
								margin="dense"
								variant="outlined"
							/>
						</Box>
						<br />
						<div>
						<Box margin={2}>
							<Button
							    startIcon={isSubmitting ? <CircularProgress size="1rem" /> : null}
								variant="contained"
								className="login-form-button"
								disabled={isSubmitting}
								onClick={submitForm}
							>
								Submit
							</Button>
						</Box>
						<br/>
						<Box margin={2}>
							<Button
							    startIcon={isSubmitting ? <CircularProgress size="1rem" /> : null}
								variant="contained"
								className="login-form-button"
								disabled={isSubmitting}
								onClick={submitForm}
							>
							Add Picture
							</Button>
						</Box>
						</div>
					</Form>
				)}
			</Formik>
			</div>
     </div>
	</>
  )
}

export default UploadEquipment
