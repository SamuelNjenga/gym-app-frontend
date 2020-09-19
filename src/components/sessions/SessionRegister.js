import React from 'react'
import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';
import { Button, Box,CircularProgress ,MenuItem,InputLabel,FormControl} from '@material-ui/core';
import { DateTimePicker } from 'formik-material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';
import { TextField,Select } from 'formik-material-ui';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import Navigation from '../navigation/Navigation';
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import { postSessionRegistration } from '../../util/APIUtils';
import { useTrainers } from '../contexts/TrainerContext';
import { useRooms } from '../contexts/RoomContext';

const ContentBox = styled.div`
	background-color: white;
	border: 2px solid MediumPurple;
    border-radius: 20px;
	width: 60%;
	font-size: 15px;
	padding: 20px;
	margin: 20px;
`;

const SessionRegisterSchema = Yup.object().shape({
	sessionStartTime: Yup.date().required('Session Start is required'),
	sessionEndTime: Yup.date().required('Session End is required'),
	trainerId: Yup.number().required('Trainer Id is required').positive().integer(),
    roomId: Yup.number().required('Room Id is required').positive().integer(),
    maxNumberOfAttendants: Yup.number().required('Max No of attendants is required').positive().integer(),
    numberOfAttendantsSoFar: Yup.number().required('No of attendants is required').integer()
});

const SessionRegister = () => {
  const history = useHistory();
  const {trainers} = useTrainers()
  const {rooms} = useRooms()
  return (
	  <>
	  <Navigation />
     <div className="equipment-container">
      <ContentBox float="left">Add a Session</ContentBox>
	  <div className="equipment-form" float="left">
	  <Formik
				initialValues={{
          sessionStartTime: new Date(),
		  sessionEndTime: new Date(),
		  trainerId: '',
		  roomId: '',
          maxNumberOfAttendants: '',
          numberOfAttendantsSoFar: ''
				}}
				onSubmit={(values, { setSubmitting }) => {
					const sendPostRequest = async () => {
						try {
							const resp = await postSessionRegistration(values);
							if (resp.status === 201) {
								history.push('/session');
							} else {
								alert('Enter again the session');
							}
						} catch (err) {
							console.error(err);
						}
					};
					sendPostRequest();
				}}
				validationSchema={SessionRegisterSchema}
			>
				{({ submitForm, isSubmitting }) => (
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
					<Form>
						<Box>
                       <Field
                           component={DateTimePicker}
                           name="sessionStartTime"
                           label="Session Start Time" />
						</Box>
						<br />
            <Box>
            <Field
              component={DateTimePicker}
              name="sessionEndTime"
              label="Session End Time"
            />
						</Box>
						<br />
						<Box>
							<Field
								component={TextField}
								name="maxNumberOfAttendants"
								type="number"
								label="Maximum Attendants"
								margin="dense"
								variant="outlined"
							/>
						</Box>
						<br />
						<Box>
							<Field
								component={TextField}
								name="numberOfAttendantsSoFar"
								type="number"
								label="Attendants So Far"
								margin="dense"
								variant="outlined"
							/>
						</Box>
						<br />
                        <Box>
						<FormControl>
                         <InputLabel htmlFor="trainer">Trainer</InputLabel>
						<Field
                            component={Select}
							inputProps={{
                                   id: 'trainer',
                                }}
                            name="trainerId" >
                               {trainers.map((option) => (
								<MenuItem key={option.id} name="trainerId" value={option.id}>
									{option.email}
								</MenuItem>
							))}
                        </Field>
						</FormControl>
						</Box>
						<br />
						<Box>
						<FormControl>
                         <InputLabel htmlFor="room">Room</InputLabel>
						<Field
						    inputProps={{
                                   id: 'room',
                                }}
                            component={Select}
                            name="roomId" >
                               {rooms.map((option) => (
								<MenuItem key={option.id} name="roomId" value={option.id}>
									{option.roomName}
								</MenuItem>
							))}
                        </Field>
						</FormControl>
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
						</div>
					</Form>
          </MuiPickersUtilsProvider>
				)}
			</Formik>
			</div>
     </div>
	</>
  )
}

export default SessionRegister;
