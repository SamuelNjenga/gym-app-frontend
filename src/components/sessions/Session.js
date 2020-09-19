import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	root: {
		maxWidth: 500,
		marginLeft: 20
	},
	media: {
		height: 200
	}
});

const Session = ({sessionStartTime, sessionEndTime, trainerId,maxNumberOfAttendants,numberOfAttendantsSoFar,roomId}) => {
	const classes = useStyles()
    
  return (
    <div>
      <Card className={classes.root}>
				<CardActionArea>
					<CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
							Trainer Id : {trainerId}
						</Typography>
						<Typography gutterBottom variant="h5" component="h2">
							Session Start Time : {sessionStartTime}
						</Typography>
                        <Typography gutterBottom variant="h5" component="h2">
							Session End Time : {sessionEndTime}
						</Typography>
						<Typography variant="body2" color="textSecondary" component="p">
							Maximum Number of Attendants : {maxNumberOfAttendants}
						</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
							Number of Attendants so far : {numberOfAttendantsSoFar}
						</Typography>
                        <Typography gutterBottom variant="h5" component="h2">
							Room Id : {roomId}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
    </div>
  )
}

Session.propTypes = {
    sessionStartTime: PropTypes.string,
    sessionEndTime: PropTypes.string,
    trainerId: PropTypes.number,
    maxNumberOfAttendants: PropTypes.number,
    numberOfAttendantsSoFar: PropTypes.number,
    roomId: PropTypes.number,
}

export default Session
