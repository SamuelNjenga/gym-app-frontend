import React,{useEffect,useState} from 'react'
import Navigation from '../navigation/Navigation'
import styled from 'styled-components';
import { getEquipments } from '../../util/APIUtils';
import Grid from '@material-ui/core/Grid';
import EquipmentItem from './EquipmentPicture';

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

const ViewEquipmentPicture = () => {
	const [equipments,setEquipments] =  useState([])
	const [loading,setLoading] = useState(true)
	const fetchEquipments = async () => {
		const res = await  getEquipments()
		const data = res.data
		setEquipments(data)
		setLoading(false)
	}
	useEffect(() => {
	fetchEquipments()
	}, [])
  return (
    <>
    <Navigation />
    <div className="equipment-container">
	   <div>
    <ContentBox float="left">List of Gym Equipments</ContentBox>
	</div>
	<div>
	{
		loading ? (<h1> Loading</h1>) : (
			<Grid container spacing={2} style={{ padding: 24 }}>
			{equipments.map(equipment => (
				<Grid key={equipment.id} item xs={12} sm={12} lg={6} xl={6}>
				<EquipmentItem {...equipment}/>
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

export default ViewEquipmentPicture
