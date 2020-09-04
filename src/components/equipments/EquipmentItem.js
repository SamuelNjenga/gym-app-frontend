import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	root: {
		maxWidth: 500,
		marginLeft: 20
	},
	media: {
		height: 140
	}
});

const EquipmentItem = ({ itemName, itemQuality, itemDescription }) => {
	const classes = useStyles();
	return (
		<div>
			<Card className={classes.root}>
				<CardActionArea>
					<CardMedia
						className={classes.media}
						image="/static/images/cards/contemplative-reptile.jpg"
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
					<Button color="primary" variant="contained">
						Add Picture
					</Button>
					<Button color="primary" variant="contained">
						View More Description
					</Button>
				</CardActions>
			</Card>
		</div>
	);
};

export default EquipmentItem;
