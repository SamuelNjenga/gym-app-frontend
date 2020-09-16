import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Image} from 'cloudinary-react'

const useStyles = makeStyles({
	root: {
		maxWidth: 500,
		marginLeft: 20
	},
	media: {
		height: 200
	}
});

const Item = ({id,itemName, itemQuality, itemDescription,picture}) => {
	const classes = useStyles()
    
  return (
    <div>
      <Card className={classes.root}>
				<CardActionArea>
                <Image key={id} cloudName="djtbvi5cq" publicId={`${picture}`} width="500" crop="scale" />
					{/* <CardMedia
						className={classes.media}
						image={ picture && <Image key={id} cloudName="djtbvi5cq" publicId={`${picture}`} width="300" crop="scale" />}
						title="Gym Equipment"
					/> */}
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
			</Card>
    </div>
  )
}

export default Item
