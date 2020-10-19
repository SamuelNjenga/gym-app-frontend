import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import {Image} from 'cloudinary-react'
import { Link } from 'react-router-dom';
import MoreOnProgram from './MoreOnProgram';

const useStyles = makeStyles({
	root: {
		maxWidth: 500,
		marginLeft: 20
	},
	media: {
		height: 100
	}
});


const Program = ({id,programTitle, programDescription,picture}) => {
	const classes = useStyles()
    const moreInfo = () =>  {
		localStorage.setItem('prod_id',id)
	}
    
  return (
    <div>
      <Card className={classes.root}>
				<CardActionArea >
                <Image key={id} cloudName="djtbvi5cq" publicId={`${picture}`} width="500" height="300" crop="scale" />
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							{programTitle}
						</Typography>
						<Typography variant="body2" color="textSecondary" component="p">
							{programDescription}
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
				{/* <Link to="/programs/more" style={{ textDecoration: 'none' }}> */}
				<Link to={`/programs/${id}`} style={{ textDecoration: 'none' }}>
                    <Button size="small" color="primary" onClick={moreInfo}>
                      Learn More
                    </Button>
                </Link>
                 </CardActions>
			</Card>
    </div>
  )
}

export default Program
