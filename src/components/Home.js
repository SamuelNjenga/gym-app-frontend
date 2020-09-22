import React from 'react'
import Typography from '@material-ui/core/Typography'
import Navigation from './navigation/Navigation'
import styled from 'styled-components';

const ContentBox = styled.div`
	background-color: white;
	border-radius: 20px;
	border: 2px solid MediumPurple;
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

const Home = () => {
  return (
    <div>
    <Navigation />
      <Typography variant="h4" align="center" component="h4">Bransky Gym And Aerobics</Typography>
      <ContentBox float="left">Online Gym Application</ContentBox>
	  <ContentBox float="left">Access Our Services Here</ContentBox>
    </div>
  )
}

export default Home
