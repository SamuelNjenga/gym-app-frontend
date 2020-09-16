import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios'

const useStyles = makeStyles({
	root: {
		maxWidth: 500,
		marginLeft: 20
	},
	media: {
		height: 200
	}
});

const EquipmentPicture = ({ id,itemName, itemQuality, itemDescription }) => {
	const classes = useStyles();
	const [ fileInputState, setFileInputState ] = useState('');
	const [ previewSource, setPreviewSource ] = useState();
	const handleFileInputChange = (e) => {
		const file = e.target.files[0];
		previewFile(file);
	};
	const previewFile = (file) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			setPreviewSource(reader.result);
		};
    };
	const handleSubmitFile = (e) => {
        e.preventDefault()
        if(!previewSource) return;
        uploadImage(previewSource);
    }
    const uploadImage = async (base64EncodedImage) => {
		console.log(base64EncodedImage);
		try {
			await axios.post(`http://localhost:5000/api/equipments/${id}/pictures`, {data:base64EncodedImage})
		} catch (error) {
			console.error(error)
		}
    }
	return (
		<div>
		<form onSubmit={handleSubmitFile}>
			<Card className={classes.root}>
				<CardActionArea>
					<CardMedia
						className={classes.media}
						image={ previewSource && ` ${previewSource}`}
						title="Contemplative Reptile"
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							{itemName}
						</Typography>
						<Typography variant="body2" color="textSecondary" component="p">
							{itemDescription}
							{itemQuality}
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button variant="contained" component="label">
						Select A File
						<input type="file" value={fileInputState} style={{ display: 'none' }} onChange={handleFileInputChange}/>
					</Button>
					<Button color="primary" variant="contained" type="submit">
						Add Picture
					</Button>
				</CardActions>
			</Card>
			</form>
		</div>
	);
};

export default EquipmentPicture;
