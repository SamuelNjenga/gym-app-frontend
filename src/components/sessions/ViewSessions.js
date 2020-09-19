import React from 'react'
import Navigation from '../navigation/Navigation'
import styled from 'styled-components';
import {useSessions} from '../contexts/SessionContext'
import Grid from '@material-ui/core/Grid';
import Session from './Session';

const ContentBox = styled.div`
	background-color: white;
	border: 2px solid MediumPurple;
    border-radius: 20px;
	width: 60%;
	font-size: 15px;
	padding: 20px;
	margin: 20px;
	float: ${(props) => props.float};

	@media (max-width: 500px) {
		float: none;
		margin: 20px auto;
	}
`;


const ViewSessions = () => {
	const {sessions,isLoading} = useSessions()
  return (
    <>
    <Navigation />
    <div className="equipment-container">
	<div>
    <ContentBox float="left">List of Gym Sessions</ContentBox>
	</div>
	<div>
	{
		isLoading ? (<h1> Loading</h1>) : (
			<Grid container spacing={2} style={{ padding: 24 }}>
			{sessions.map(session => (
				<Grid key={session.id} item xs={12} sm={12} lg={6} xl={6}>
				<Session  {...session} />
				</Grid>
			))
			}
			</Grid>	
		)
	}
	</div>
    </div>
    </>
  )
}

export default ViewSessions;
