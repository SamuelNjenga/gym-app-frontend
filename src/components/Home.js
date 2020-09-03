import React from 'react'
import Navigation from './navigation/Navigation'
import styled from 'styled-components';

const ContentBox = styled.div`
	background-color: white;
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
      <h1>Home</h1>
      <ContentBox float="left">My Gym Application</ContentBox>
			<ContentBox float="right">An interesting software Application</ContentBox>
    </div>
  )
}

export default Home
