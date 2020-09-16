import React from 'react'
import styled from 'styled-components';
import './Equipment.css'
import Navigation from '../navigation/Navigation'
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

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

const Equipment = () => {
  return (
      <>
      <Navigation />
    <div className="equipment-container">
      <ContentBox float="left">My Gym Application Equipments</ContentBox>
      <div className="equipment-button">
      <Link to="/viewequipments" style={{ textDecoration: 'none' }}>
      <Button variant="contained">View Available Gym Equipments</Button>
	    </Link>
      <Link to="/uploadequipment" style={{ textDecoration: 'none' }}>
      <Button variant="contained">Add an Equipment</Button>
	    </Link>
    </div>
    </div>
    </>
  )
}

export default Equipment
