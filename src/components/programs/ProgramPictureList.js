import React from 'react'
import Navigation from '../navigation/Navigation'
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { usePrograms } from '../contexts/ProgramContext';
import PostProgramPicture from './PostProgramPicture';

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


const ProgramPictureList = () => {
	const {programs,isLoading} = usePrograms()
	
  return (
    <>
    <Navigation />
    <div className="equipment-container">
	<div>
    <ContentBox float="left">List of Offered Gym Programs</ContentBox>
	</div>
	<div>
	{
		isLoading ? (<h1> Loading</h1>) : (
			<Grid container spacing={2} style={{ padding: 24 }}>
			{programs.map(program => (
				<Grid key={program.id} item xs={12} sm={12} lg={6} xl={6}>
				<PostProgramPicture
				 picture={program.ProgramPictures[0].picture} 
				{...program} />
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

export default ProgramPictureList;
